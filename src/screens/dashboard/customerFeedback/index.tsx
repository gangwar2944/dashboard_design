import { Box, Divider, styled, Typography } from "@mui/material";
import React from "react";
import { StyledStack } from "../../../shared-ui/StyledCommonComponent";
import BasicRating from "../../../shared-ui/BasicRating";
interface RecentlyAdmissonsList {
  customer: string;
  time: string;
  discription: string;
  rating:number;
}
const CustomScrollBox = styled(Box)(({ theme }) => ({
  height: 290,
  overflow: 'auto',
  '&::-webkit-scrollbar': {
    width: '8px', // Width of the scrollbar
    height: '8px', // Height of the scrollbar
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.primary.main, // Color of the scrollbar thumb
    borderRadius: '4px', // Border radius of the scrollbar thumb
  },
  '&::-webkit-scrollbar-track': {
    background: 'transparent', // Background of the scrollbar track
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: theme.palette.primary.dark, // Color of the scrollbar thumb on hover
  },
}));
const CustomerFeedbackTile = () => {
  const customerFeedback: RecentlyAdmissonsList[] = [
    {
      customer: "Vishal Gangwar",
      time: "24 hours ago",
      discription: "I'm using oneShop for many years and I have been impressed with the great deals, offers, and products available",
      rating: 4
    },
    {
      customer: "Sonu Yadav",
      time: "8 hours ago",
      discription: "The app is overall excellent. However, recently I discovered that I am unable to access saved for later section which shows 25 items in it but I am unable to delete.",
      rating: 5
    },
    {
      customer: "Vivek",
      time: "16 hours ago",
      discription: "I had an absolutely dreadful experience with oneShop",
      rating: 3
    },
  ];
  return (
    <StyledStack>
      <Box
        sx={{
          padding: "20px",
        }}
      >
          <Typography>Customer Feedback</Typography>
        <CustomScrollBox height={290} overflow={"auto"}>
          {customerFeedback.map((item, index) => (
            <Box key={index} padding={"8px"}>
              <Box
                display={"flex"}
                justifyContent={"flex-start"}
                gap={"10px"}
                alignItems={"center"}
              >
                <Box width={'40px'} height={"40px"}>
                  <img
                    src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                    alt="img"
                    style={{
                      width: "100%",
                      height:"100%",
                      borderRadius: "50%",
                      objectFit:"cover"
                    }}
                  />
                </Box>
                <Typography fontWeight={700} component="span">
                  {item.customer}
                </Typography>
              </Box>
              <Box>
                <BasicRating value={item.rating}/>
              </Box>
              <Box mb={1}>
                <Typography
                  component="span"
                  sx={{
                    color: (theme) => theme.palette.text.secondary,
                  }}
                >
                  {item.discription}
                </Typography>
              </Box>
              <Divider/>
            </Box>
          ))}
        </CustomScrollBox>
      </Box>
    </StyledStack>
  );
};

export default CustomerFeedbackTile;
