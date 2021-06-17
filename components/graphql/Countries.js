import Box from "@material-ui/core/Box";

export default function Countries({ countries }) {
  return (
    <Box>
      <h1>Countries</h1>
      <div>{JSON.stringify(countries)}</div>
    </Box>
  );
}
