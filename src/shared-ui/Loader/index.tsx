import { CircularProgress, styled } from "@mui/material";

const StyledLoader = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export function Loader(): JSX.Element {
  return <StyledLoader data-testid="custom-Loader" size={20} />;
}
