import { Grid } from "@mui/material";

export default function Service(props) {
    return (
        <Grid className="service_1">
            <Grid item xs={12} className="service_3">
                <Grid className="service_4" style={{backgroundImage : `url(${props.imgs})`, backgroundPosition : "right", backgroundSize : "600px"}}>
                    <p className="service_6"></p>
                    <p>{props.text_1} </p>
                </Grid>
                <Grid className="service_5">
                    <Grid>
                        <h3>{props.text_2}</h3>
                        <p>{props.text_3}</p>
                    </Grid>
                    <Grid>
                        <img src={props.img} alt="" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}