import { Grid } from "@mui/material";

export default function MyCard() {
    return (
        <Grid className="me-3">
            <Grid item xs={12} className="card">
                <Grid className="card_1">
                    <img src="https://s.alicdn.com/@sc04/kf/H7c4e1a767ff843d6a7f2e09f4c6967d9W.jpg" alt="" />
                    <p className="card_2">Silica gel kitchen ware 10 pcs / sets</p>
                    <p className="card_3">$10:30</p>
                    <p className="card_5">1 Set (Min. Order)</p>
                </Grid>
            </Grid>
        </Grid>
    );
}