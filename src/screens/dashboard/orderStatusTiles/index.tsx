import React, { ReactNode, useCallback } from "react";
import { Box, Typography, useTheme, styled } from "@mui/material";
import { StyledStack } from "../../../shared-ui/StyledCommonComponent";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

interface OrderStatusProps {
  iconsIndex: number;
  title: string;
  expenditure: string;
  time: string;
}

const IconBox = styled(Box)(() => ({
  width: "50px",
  height: "50px",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  padding: "20px",
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  justifyContent: "space-between",
  flexDirection: "column",
  [theme.breakpoints.down("lg")]: {
    // flexDirection: "row",
  },
}));

// const TypographyTime = styled(Typography)(({ theme }) => ({
//   fontSize: "13px",
//   color: theme.palette.text.secondary,
//   marginTop: "8px",
// }));

const TypographyExpenditure = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  marginTop: theme.spacing(1),
  [theme.breakpoints.down("xs")]: {
    fontSize: theme.typography.h6.fontSize, // Adjust the font size for smaller screens
  },
}));

const FlexBoxSpaceBetween = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const OrderStatus = ({
  iconsIndex,
  title,
  expenditure,
  time,
}: OrderStatusProps) => {
  const theme = useTheme();

  const getIcons = useCallback(
    (idx: number): ReactNode => {
      switch (idx) {
        case 1:
          return (
            <IconBox
              sx={{
                background: theme.palette.primary.main,
                color: theme.palette.common.white,
              }}
            >
              <ShoppingCartOutlinedIcon />
            </IconBox>
          );
        case 2:
          return (
            <IconBox
              sx={{
                background: theme.palette.success.main,
                color: theme.palette.common.white,
              }}
            >
              <LocalMallOutlinedIcon />
            </IconBox>
          );
        case 3:
          return (
            <IconBox
              sx={{
                background: theme.palette.error.main,
                color: theme.palette.common.white,
              }}
            >
              <LocalMallOutlinedIcon />
            </IconBox>
          );
        default:
          return (
            <IconBox
              sx={{
                background: theme.palette.success.main,
                color: theme.palette.common.white,
              }}
            >
              <MonetizationOnOutlinedIcon />
            </IconBox>
          );
      }
    },
    [theme]
  );
  const getProfitLoss = useCallback(
    (idx: number): ReactNode => {
      switch (idx % 2) {
        case 0:
          return (
            <Box display={"flex"} gap={"5px"}>
              <ArrowDropDownOutlinedIcon color="error" />
              <Typography
                variant="body1"
                sx={{ color: (theme) => theme.palette.error.main }}
              >
                3%
              </Typography>
            </Box>
          );
        case 1:
          return (
            <Box display={"flex"} gap={"5px"}>
              <ArrowDropUpOutlinedIcon color="success" />
              <Typography
                variant="body1"
                sx={{ color: (theme) => theme.palette.success.main }}
              >
                3%
              </Typography>
            </Box>
          );
      }
    },
    []
  );
  return (
    <StyledStack>
      <ContentContainer>
        {getIcons(iconsIndex)}
        <Box>
          <Typography variant="body1" fontWeight={600} fontSize={"13px"}>
            {title}
          </Typography>
          <FlexBoxSpaceBetween>
            <TypographyExpenditure variant="body1">
              {expenditure}
            </TypographyExpenditure>
            {getProfitLoss(iconsIndex)}
          </FlexBoxSpaceBetween>
        </Box>
        {/* <TypographyTime variant="subtitle2">{time}</TypographyTime> */}
      </ContentContainer>
    </StyledStack>
  );
};

export default React.memo(OrderStatus);
