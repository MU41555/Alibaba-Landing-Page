import { Grid } from "@mui/material";

export default function MyCard(props) {
    return (
        <Grid className="me-3">
            <Grid item xs={12} className="card">
                <Grid className="card_1">
                    <img src={props.img} alt="" />
                    <p className="card_2">{props.text}</p>
                    <p className="card_3">{props.text1}</p>
                    <p className="card_5">{props.text2}</p>
                </Grid>
            </Grid>
        </Grid>
    );
}