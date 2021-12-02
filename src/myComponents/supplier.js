import { Grid } from "@mui/material";

export default function Supplier(props) {
    return (
        <Grid className="suppliers">
            <Grid item xs={12} className="supplier_1">
                <Grid className="supplier">
                    <img src={props.img} alt="" />
                </Grid>
                <Grid>
                    <p>{props.text}</p>
                </Grid>
            </Grid>
        </Grid>
    );
}