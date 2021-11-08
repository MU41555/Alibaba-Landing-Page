import { Grid } from "@mui/material";

export default function Request() {
    return (
        <Grid className="request">
            <Grid className="request_1">
                <img src="https://img.alicdn.com/tfs/TB1BNqtyND1gK0jSZFKXXcJrVXa-96-68.png" alt="" />
                <span className="requests">REQUEST FOR QUOTATION</span><span className="requestes">Customizaton Service</span>
            </Grid>
            <Grid container>
                <Grid item xs={6.4} className="request_2">
                    <Grid className="request_3">
                        <img src="https://img.alicdn.com/tfs/TB1RrnvyuT2gK0jSZFvXXXnFXXa-800-375.png" alt="" />
                    </Grid>
                    <Grid className="request_4">
                        Global Sourcing Marketplace
                    </Grid>
                    <Grid className="request_5">
                        <h5>1906000 +</h5>
                        <p>REQs</p>
                    </Grid>
                    <Grid className="request_6">
                        <h5>177000 +</h5>
                        <p>Active Suppliers</p>
                    </Grid>
                    <Grid className="request_7">
                        <h5>22h</h5>
                        <p>Avg Quotation Duration</p>
                    </Grid>
                    <Grid className="request_8">
                        <h5>5899</h5>
                        <p>Industries</p>
                    </Grid>
                    <Grid className="request_9">
                        <p>Learn More</p>
                    </Grid>
                </Grid>
                <Grid item xs={5.6} className="req">
                    <Grid className="req_1">
                        <h3>One Request, Multiple Quotes</h3>
                    </Grid>
                    <Grid className="req_2">
                        <p>"Modern Home Frameless Espejo Circular Led smart mirror" from  n***** received 3 quotation</p>
                    </Grid>
                    <Grid className="req_3">
                        <input size="46" type="text" placeholder="What are you looking for" name="" id="" />
                    </Grid>
                    <Grid className="req_4">
                        <Grid className="req_5">
                            <input type="number" placeholder="Quantity" name="" id="" />
                        </Grid>
                        <Grid className="req_6">
                            <select name="" id="" placeholder="Quantity">
                                <option value="">Bag/Bags</option>
                                <option value="">Barrel/Barrel</option>
                                <option value="">Bushel/Bushels</option>
                                <option value="">Dozen/Dozens</option>
                                <option value="">Gallon/Gallons</option>
                                <option value="">Gram/Grams</option>
                                <option value="">Kilogram/Kilograms</option>
                                <option value="">Set/Sets</option>
                            </select>
                        </Grid>
                    </Grid>
                    <Grid className="req_7">
                        <p>Request For Quotation</p>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}