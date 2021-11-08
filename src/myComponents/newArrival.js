import { Grid } from "@mui/material";

export default function NewArrival(props) {
    return (
        <>
            <Grid className="arrival">

                <Grid item xs={12}  className="arrivals_1 ">
                    <Grid className="arrival_2">
                        <img src={props.img} alt="" /><span>{props.text}</span>
                    </Grid>
                    <Grid className="arrival_5">
                        <Grid>
                            <Grid className="arrival_3">
                                <img src={props.imgs} alt="" />
                            </Grid>
                            <Grid className="arrival_4">
                                <p>{props.text_1} <br /><span>{props.text_2}</span></p>
                            </Grid>
                        </Grid>
                        <Grid>
                            <Grid className="arrival_3">
                                <img src={props.imgs_1} alt="" />
                            </Grid>
                            <Grid className="arrival_4">
                                <p>{props.text_3} <br /><span>{props.text_4}</span></p>
                            </Grid>
                        </Grid>
                        <Grid>
                            <Grid className="arrival_3">
                                <img src={props.imgs_2} alt="" />
                            </Grid>
                            <Grid className="arrival_4">
                                <p>{props.text_5} <br /><span>{props.text_6}</span></p>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

        </>
    );
}

