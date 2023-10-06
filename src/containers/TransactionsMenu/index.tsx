import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { TransactionProps } from "../../interface";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const TransactionMenu = () => {
  const navigate = useNavigate();
  const [transactionsData, setTransactionsData] = useState([]);
  const [xRequestId, setXRequestId] = useState("");

  const fetchData = async () => {
    try {
      const XRequestId = uuidv4();
      setXRequestId(XRequestId);

      const response = await fetch(
        `https://week-15-hartantodody.up.railway.app/api/v1/admin/transactions`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-request-id": xRequestId,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const responseData = await response.json();
      setTransactionsData(responseData.data);
    } catch (error) {
      alert("Cannot fetch data! Error : " + error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const XRequestId = uuidv4();
      setXRequestId(XRequestId);

      const response = await fetch(
        `https://week-15-hartantodody.up.railway.app/api/v1/admin/transactions/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "x-request-id": XRequestId,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Delete request failed");
      }

      fetchData();

      alert("Transaction deleted successfully");
    } catch (error) {
      alert("Cannot delete transaction! Error : " + error);
    }
  };
  const navigateAddDataForm = () => {
    navigate("/add-data");
  };

  const handleEdit = (id: number) => {
    navigate(`/edit-data/${id}`);
  };
  // console.log(transactionsData);
  return (
    <>
      <Button variant="contained" color="success" onClick={navigateAddDataForm}>
        <AddIcon />
        <Typography>Add Transaction</Typography>
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactionsData.map((transactionData: TransactionProps) => (
              <TableRow key={transactionData.id}>
                <TableCell>{transactionData.id}</TableCell>
                <TableCell>{transactionData.type}</TableCell>
                <TableCell>{transactionData.category}</TableCell>
                <TableCell>{transactionData.description}</TableCell>
                <TableCell>{transactionData.amount}</TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    onClick={() => handleEdit(transactionData.id)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => handleDelete(transactionData.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TransactionMenu;
