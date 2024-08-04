import React from "react";
import DailyAttendaceData from "../../shared-ui/Charts/DailyActivityData";
import { StyledStack } from "../../shared-ui/StyledCommonComponent";
import {
  Stack,
  Typography,
  Grid,
  styled,
  Box,
  MenuItem,
  Select,
} from "@mui/material";
import SalesAnalitics from "../dashboard/salesAnalitics";
import { Heading } from "../styledComponent/styled";
import { gridSpacingLarge } from "../../services/general/constants";
import OrderStatusTiles from "../dashboard/orderStatusTiles";
import NewProfitTile from "../dashboard/newProfitTile";
import Orders from "../dashboard/Orders";
import CustomerFeedbackTile from "../dashboard/customerFeedback";
import { useInnerWidth } from "../../shared-ui/customHooks/getStackWidth";

const GraphHeading = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "8px 10px",
}));

const Home = () => {
  const stackWidth = useInnerWidth();

  const attendanceData = [
    { date: "01", value: 19 },
    { date: "02", value: 18 },
    { date: "03", value: 15 },
    { date: "04", value: 12 },
    { date: "05", value: 6 },
    { date: "06", value: 4 },
    { date: "07", value: 1 },
    { date: "08", value: 3 },
    { date: "09", value: 8 },
    { date: "10", value: 13 },
    { date: "11", value: 5 },
    { date: "12", value: 3 },
    { date: "13", value: 12 },
    { date: "14", value: 3 },
    { date: "15", value: 4 },
    { date: "16", value: 13 },
    { date: "17", value: 15 },
    { date: "18", value: 12 },
    { date: "19", value: 6 },
    { date: "20", value: 4 },
    { date: "21", value: 13 },
    { date: "22", value: 5 },
    { date: "23", value: 3 },
    { date: "24", value: 12 },
    { date: "25", value: 3 },
  ];

  const tilesData = [
    {
      title: "Total Order",
      expenditure: "75",
      time: "Last 24 hours",
    },
    {
      title: "Total Delivered",
      expenditure: "70",
      time: "Last 24 hours",
    },
    {
      title: "Total Cancelled",
      expenditure: "05",
      time: "Last 24 hours",
    },
    {
      title: "Total Revenue",
      expenditure: "$12k",
      time: "Last 24 hours",
    },
  ];

  return (
    <Stack>
      <Grid container>
        <Grid item xs={12} md={6} lg={8}>
          <Heading>Dashboard</Heading>
        </Grid>
      </Grid>
      <Grid container spacing={gridSpacingLarge}>
        <Grid item xs={12} md={6} lg={8}>
          <Grid container spacing={gridSpacingLarge}>
            {tilesData.map((item, index) => (
              <Grid item key={index} xs={6} sm={6} md={6} lg={3}>
                <OrderStatusTiles
                  iconsIndex={index + 1}
                  title={item.title}
                  expenditure={item.expenditure}
                  time={item.time}
                />
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={gridSpacingLarge} mt={0}>
            <Grid item xs={12} lg={12}>
              <StyledStack
                sx={{ padding: "15px", maxHeight: "250px", width: stackWidth }}
              >
                <GraphHeading>
                  <Typography>Activity</Typography>
                  <Select
                    size="small"
                    placeholder="Select"
                    sx={{
                      width: "100px",
                      fontSize: "0.875rem",
                      ".MuiSelect-select": {
                        padding: "4px 8px",
                      },
                    }}
                    value="Weekly"
                  >
                    {["Weekly", "Monthly", "Yearly"].map((item) => (
                      <MenuItem
                        key={item}
                        value={item}
                        sx={{ fontSize: "0.875rem", padding: "4px 8px" }}
                      >
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </GraphHeading>
                <DailyAttendaceData chartData={attendanceData} />
              </StyledStack>
            </Grid>
            <Grid item xs={12} lg={12}>
              <StyledStack p={2} sx={{ width: stackWidth }}>
                <Orders />
              </StyledStack>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <NewProfitTile
            iconsIndex={0}
            title={"New Profit"}
            expenditure={6545}
            progressValue={60}
            time={"3%"}
          />
          <SalesAnalitics />
          <CustomerFeedbackTile />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Home;
