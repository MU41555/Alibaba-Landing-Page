import { Grid } from "@mui/material";

export default function Supplier() {
    return (
        <Grid className="suppliers">
            <Grid item xs={12} className="supplier_1">
                <Grid className="supplier">
                    <img src="https://img.alicdn.com/tps/TB1fky3PFXXXXcuXpXXXXXXXXXX-48-48.png" alt="" />
                </Grid>
                <Grid>
                    <p>Vitnam</p>
                </Grid>
            </Grid>
        </Grid>
    );
}