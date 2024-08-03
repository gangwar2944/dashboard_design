import { Box, styled, Typography, useTheme } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";
import { StyledStack } from "../../../shared-ui/StyledCommonComponent";
import { gridSpacingLarge } from "../../../services/general/constants";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import GpsFixedOutlinedIcon from '@mui/icons-material/GpsFixedOutlined';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';

const RightIconContainer = styled(Box)(({ theme }) => ({
  width: "40px",
  height: "40px",
  borderRadius: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: theme.palette.secondary.main,
}));
const FlexBoxEnd = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
}));
const FlexBoxStart = styled(FlexBoxEnd)(()=>({
  justifyContent:"flex-start",
  gap:"10px"
}))
interface SalesAnaliticsI {
  orderType: string;
  percent: number;
  value: number;
}
const SalesAnalitics = () => {
  const theme = useTheme();
  const recentlyAddmissons: SalesAnaliticsI[] = [
    {
      orderType: "Goals",
      percent: 39,
      value: 8965,
    },
    {
      orderType: "Popular Dishes",
      percent: 17,
      value: 2545,
    },
    {
      orderType: "Menus",
      percent: 25,
      value: 1569,
    },
  ];
  const getColor = (index: number) => {
    switch (index) {
      case 0:
        return theme.palette.primary.main;
      case 1:
        return theme.palette.error.main;
      case 2:
        return theme.palette.success.main;
      default:
        return theme.palette.success.main;
    }
  };
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <GpsFixedOutlinedIcon sx={{ color: theme.palette.common.white }} />;
      case 1:
        return <LunchDiningOutlinedIcon sx={{ color: theme.palette.common.white }} />;
      case 2:
        return <MenuBookOutlinedIcon sx={{ color: theme.palette.common.white }} />;
      default:
        return <PersonIcon sx={{ color: theme.palette.common.white }} />;
    }
  };
  return (
    <StyledStack spacing={gridSpacingLarge} p={gridSpacingLarge} mt={gridSpacingLarge} mb={gridSpacingLarge}>
      {recentlyAddmissons.map((item, index) => (
          <Box display={"flex"} key={item.orderType}>
            <FlexBoxStart flex={4}>
              <Box
                width={"51px"}
                height={"51px"}
                borderRadius={"50%"}
                display='flex'
                justifyContent= 'center'
                alignItems= 'center'
                sx={{ background: () => getColor(index) }}
              >
                {getIcon(index)}
              </Box>
              <Box alignContent={"center"}>
                <Typography fontWeight={700} component="span">
                  {item.orderType}
                </Typography>
              </Box>
            </FlexBoxStart>

            <FlexBoxEnd flex={1} textAlign={"right"}>
              <RightIconContainer>
                <NavigateNextOutlinedIcon />
              </RightIconContainer>
            </FlexBoxEnd>
          </Box>
      ))}
    </StyledStack>
  );
};

export default SalesAnalitics;
