import Grid from '@mui/material/Grid';
import BookList from '../component/BookList/BookList';
import { Profile } from '../component/Profile';

export default function Dashboard() {
  return (
    <Grid container direction="column" spacing={2} height="100vh" flexWrap="nowrap">
      <Grid item style={{ height: 240 }}>
        <Profile />
      </Grid>
      <Grid item style={{
        height: 780,
        maxHeight: 780,
        overflow: "auto"
      }}>
        <BookList />
      </Grid>
    </Grid>
  )
}