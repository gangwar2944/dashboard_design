import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  styled,
  Button,
  useTheme,
} from "@mui/material";

interface Row {
  id: number;
  customer: string;
  img: string;
  orderNumber: string;
  Amount: string;
  Status: string;
}

interface Column {
  field: keyof Row;
  headerName: string;
  width: number | string;
}

const CustomTableCell = styled(TableCell)(({ theme }) => ({
  padding: "5px 10px",
  borderBottom: `1px solid ${theme.palette.grey[100]}`,
}));

const Orders = () => {
  const theme = useTheme();

  const getStatusStyles = (status: string) => {
    let backgroundColor;
    switch (status) {
      case "Completed":
        backgroundColor = theme.palette.success.light;
        break;
      case "Cancelled":
        backgroundColor = theme.palette.error.light;
        break;
      case "Pending":
        backgroundColor = theme.palette.warning.light;
        break;
      default:
        backgroundColor = theme.palette.grey[100];
    }
    return {
      backgroundColor,
      color: theme.palette.getContrastText(backgroundColor),
    };
  };

  const StatusButton = styled(Button)(({ status }: { status: string }) => ({
    borderRadius: "20px",
    padding: "5px 10px",
    ...getStatusStyles(status),
    minWidth: "80px",
  }));

  const columns: Column[] = [
    { field: "customer", headerName: "Customer", width: "20%" },
    { field: "orderNumber", headerName: "Order Number", width: "30%" },
    { field: "Amount", headerName: "Amount", width: "20%" },
    { field: "Status", headerName: "Status", width: "20%" },
  ];

  const rows: Row[] = [
    {
      id: 1,
      customer: "John Doe",
      img: "https://media.istockphoto.com/id/2066301960/photo/man-with-eyeglasses-stand-at-home-use-mobile-phone-sms-texting.webp?b=1&s=170667a&w=0&k=20&c=vqIwS_XZ6kq4bC_xOiDs7i3dOyaxfxCUftoozJNRVQw=",
      orderNumber: "ORD12345",
      Amount: "$150.00",
      Status: "Pending",
    },
    {
      id: 2,
      customer: "Jane Smith",
      img: "https://media.istockphoto.com/id/1862730133/photo/mature-happy-man-with-eyeglasses-using-his-smartphone-while-relaxing-in-the-couch-at-home.jpg?s=2048x2048&w=is&k=20&c=Dhl2cMtQIhcOoW36K7jBpJIOrsqiJbBGxcO0nX8xAOk=",
      orderNumber: "ORD12346",
      Amount: "$250.00",
      Status: "Completed",
    },
    {
      id: 3,
      customer: "Alice Johnson",
      img: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
      orderNumber: "ORD12347",
      Amount: "$350.00",
      Status: "Shipped",
    },
    {
      id: 4,
      customer: "Bob Brown",
      img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww",
      orderNumber: "ORD12348",
      Amount: "$450.00",
      Status: "Cancelled",
    },
    {
      id: 5,
      customer: "Charlie Davis",
      img: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
      orderNumber: "ORD12349",
      Amount: "$550.00",
      Status: "Processing",
    },
  ];

  return (
    <Box>
      <Typography mb={1}>Recent Orders</Typography>
      <TableContainer
        component={Paper}
        sx={{
          background: (theme) => theme.palette.background.paper,
          boxShadow: "none",
         
        }}
      >
        <Table sx={{ minWidth: "500px", overflowX: "scroll" }}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <CustomTableCell
                  key={column.field}
                  style={{ width: column.width, minWidth: "100px" }}
                >
                  <b>{column.headerName}</b>
                </CustomTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                {columns.map((column) =>
                  column.field === "Status" ? (
                    <CustomTableCell key={column.field}>
                      <StatusButton status={row.Status}>
                        {row[column.field]}
                      </StatusButton>
                    </CustomTableCell>
                  ) : (
                    <CustomTableCell key={column.field}>
                      {column.field === "customer" ? (
                        <Box display="flex" alignItems="center" gap={"5px"}>
                          <img
                            src={row.img}
                            alt="img"
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                              objectFit: "cover",
                            }}
                          />
                          <Typography>{row[column.field]}</Typography>
                        </Box>
                      ) : (
                        row[column.field]
                      )}
                    </CustomTableCell>
                  )
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Orders;
