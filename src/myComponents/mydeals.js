import { Grid } from "@mui/material";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

export default function MyDeals() {
    return (
        <Grid className="text-white">
            <Grid><span>WEEKLY DEALS</span><span><hr/></span></Grid>
            <Grid className="bg-white deals">
                <Grid item xs={12}>
                    <Grid className="deals_1">
                        <Grid className="deals_2">
                            <img src="https://s.alicdn.com/@sc04/kf/H4d252f2f1bb146bb8ba2f19d0599268de.jpg_220x220.jpg" alt="" />
                            <p>View more <KeyboardArrowRightOutlinedIcon sx={{ color: "#bdbdbd" }} /></p>
                        </Grid>
                        <Grid className="deals_3">
                            <img src="https://s.alicdn.com/@sc04/kf/H4d252f2f1bb146bb8ba2f19d0599268de.jpg_220x220.jpg" alt="" />
                            <h5>$5.00</h5>
                            <p>1 Piece (MOQ)</p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}