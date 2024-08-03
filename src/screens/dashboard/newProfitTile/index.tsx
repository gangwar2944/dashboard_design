import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { StyledStack } from "../../../shared-ui/StyledCommonComponent";
import MuiProgress from "../../../shared-ui/MuiProgress"
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";

interface TilesProps {
  iconsIndex: number;
  title: string;
  expenditure: number;
  progressValue: number;
  time: string;
}


const BoxContainer = styled(Box)(({ theme }) => ({
  padding: "20px",
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.down("lg")]: {
    flexDirection: "row",
  },
}));

const ContentContainer = styled(Box)(() => ({
  flex: 1,
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
}));
const ProgessbarContainer = styled(Box)(() => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
}));
const TypographyTime = styled(Typography)(({ theme }) => ({
  fontSize: "13px",
  marginTop:"2px",
  color: theme.palette.text.secondary,
}));

const TypographyExpenditure = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down("xs")]: {
    fontSize: theme.typography.h6.fontSize, // Adjust the font size for smaller screens
  },
}));

const Tiles = ({
  title,
  expenditure,
  progressValue,
  time,
}: TilesProps) => {

  return (
    <StyledStack>
      <BoxContainer>
        <ContentContainer>
          <Box>
            <Typography variant="body1" fontWeight={600}>
              {title}
            </Typography>
            <TypographyExpenditure variant="h4">
              ${expenditure}
            </TypographyExpenditure>
          </Box>
          <Box display={"flex"} gap={"5px"} color={'palette.success'}>
              <ArrowDropUpOutlinedIcon color="success"/>
              <Typography variant="body1" sx={{color:(theme)=>theme.palette.success.main}}>3%</Typography>
            </Box>
        </ContentContainer>
        <ProgessbarContainer>
          <MuiProgress progressValue={progressValue} />
          <TypographyTime>*This values here has been rounded off</TypographyTime>
        </ProgessbarContainer>
      </BoxContainer>
    </StyledStack>
  );
};

export default React.memo(Tiles);
