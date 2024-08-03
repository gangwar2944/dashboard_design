import {
  Box,
  CircularProgress,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

interface MuiProgressProps {
  progressValue: number;
}

function MuiProgress({ progressValue }: MuiProgressProps) {
  const theme = useTheme();
  return (
    <Stack direction="row" spacing={4}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "inline-flex",
            width: "90px",
            height: "90px",
          }}
        >
          <CircularProgress
            size="90px"
            sx={{
              color: theme.palette.primary.main, // Primary color
              position: "absolute",
              left: 0,
              transform: "rotate(90deg)", // Start from bottom center
              strokeLinecap: "round", // Rounded corners
            }}
            thickness={6}
            value={progressValue}
            variant="determinate"
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              color="textPrimary"
              component="div"
              fontSize="16px"
              variant="caption"
              sx={{color:(theme)=>theme.palette.text.secondary}}
            >{`${progressValue}%`}</Typography>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}

export default MuiProgress;
