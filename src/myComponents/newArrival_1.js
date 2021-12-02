import { Grid } from "@mui/material";

export default function NewArrival_1(props) {
    return (
        <Grid className="newArrival">
            <Grid item xs={12} className="newArrival_1 ">
                <Grid className="newArrival_8">
                    <Grid className="newArrival_2">
                        <h4>{props.text_1}</h4>
                        <p>{props.text_2} <br/> {props.text_3}</p>
                    </Grid>
                    <Grid className="newArrival_3">
                        <img src={props.img_1} alt="" />
                    </Grid>
                </Grid>
                <Grid className="newArrival_4 d-flex justify-content-center">
                    <Grid className="newArrival_7">
                        <Grid className="newArrival_5"><p>{props.text_4}</p></Grid>
                        <Grid className="newArrival_6 d-flex justify-content-center">
                            <img src={props.img_2} alt="" />
                            <img src={props.img_3} alt="" />
                            <img src={props.img_4} alt="" />
                        </Grid>
                    </Grid>
                    <Grid  className="newArrivals_7">
                        <Grid className="newArrival_5"><p>{props.text_5}</p></Grid>
                        <Grid className="newArrival_6 d-flex justify-content-center">
                            <img src={props.img_5} alt="" />
                            <img src={props.img_6} alt="" />
                            <img src={props.img_7} alt="" />
                        </Grid>
                    </Grid>


                </Grid>
            </Grid>

        </Grid>
    );
}