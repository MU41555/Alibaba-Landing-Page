import { Grid } from "@mui/material";

export default function NewArrival(props) {
    return (
        <>
            <Grid className="arrival">

                <Grid item xs={12}  className="arrivals_1 ">
                    <Grid className="arrival_2">
                        <img src={props.b} alt="" /><span>{props.a}</span>
                    </Grid>
                    <Grid className="arrival_5">
                        <Grid>
                            <Grid className="arrival_3">
                                <img src={props.c} alt="" />
                            </Grid>
                            <Grid className="arrival_4">
                                <p>{props.i} <br /><span>{props.f}</span></p>
                            </Grid>
                        </Grid>
                        <Grid>
                            <Grid className="arrival_3">
                                <img src={props.d} alt="" />
                            </Grid>
                            <Grid className="arrival_4">
                                <p>{props.j} <br /><span>{props.g}</span></p>
                            </Grid>
                        </Grid>
                        <Grid>
                            <Grid className="arrival_3">
                                <img src={props.e} alt="" />
                            </Grid>
                            <Grid className="arrival_4">
                                <p>{props.k} <br /><span>{props.h}</span></p>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>

        </>
    );
}

