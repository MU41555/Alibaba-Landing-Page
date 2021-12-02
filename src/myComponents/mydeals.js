import { Grid } from "@mui/material";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

export default function MyDeals(props) {
    return (
        <Grid className="text-white">
            <Grid className="deals"><span>{props.text}</span><span><hr/></span></Grid>
            <Grid className="bg-white">
                <Grid item xs={12}>
                    <Grid className="deals_1">
                        <Grid className="deals_2">
                            <img src={props.img} alt="" />
                            <p>View more <KeyboardArrowRightOutlinedIcon sx={{ color: "#bdbdbd" }} /></p>
                        </Grid>
                        <Grid className="deals_3">
                            <img src={props.img_1} alt="" />
                            <h5>{props.text_1}</h5>
                            <p>{props.text_2}</p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}