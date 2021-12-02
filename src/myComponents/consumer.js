import { Grid3x3 } from "@mui/icons-material";
import { Grid } from "@mui/material";

export default function Consumer(props) {
    return (
        <Grid className=" consum_1">
            <Grid className="consum_2">
                <Grid className="consum_3 text-white">
                    <h4>{props.text1}</h4><hr />
                </Grid>
                <Grid container>
                    <Grid item xs={2.7}>
                        <Grid className="consum_4">
                            <Grid className="consum_5">
                                <img src={props.img} alt="" />
                            </Grid>
                            <Grid className="consum_6">{props.text2} <br />{props.text3}</Grid>
                            <Grid className="consum_7">Source Now</Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={9.3} className="bg-white">
                        <Grid className="consumer">
                            <Grid className="myconsum_1">
                                <Grid className="myconsum_2">
                                    <img src={props.img_1} alt="" />
                                    <span>Premium OEM Factories</span>
                                    <p>Customization service available</p>
                                </Grid>
                                <Grid  className="myconsum_3">
                                    <img src={props.img_2} alt="" />
                                    <img className="myimg" src={props.img_3} alt="" />
                                </Grid>
                            </Grid>
                            <Grid className="myconsum_1">
                                <Grid className="myconsum_4">
                                    <h5>Top sale</h5>
                                    <img src={props.img_4} alt="" />
                                    <span>{props.text4}</span>
                                </Grid>
                                <Grid className="myconsum_5">
                                    <img className="myimg" src={props.img_5} alt="" />
                                </Grid>
                            </Grid>
                            <Grid className="myconsum_1"> 
                                <Grid className="myconsum_6">
                                    <h5>{props.text5}</h5>
                                    <br />
                                </Grid>
                                <Grid className="myconsum_5">
                                    <img className="myimg" src={props.img_6} alt="" />
                                </Grid>
                            </Grid>
                            <Grid className="myconsum_1">
                                <Grid className="myconsum_6">
                                    <h5>{props.text6}</h5>
                                    <br />
                                </Grid>
                                <Grid className="myconsum_5">
                                    <img className="myimg" src={props.img_7} alt="" />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className="consumer">
                            <Grid className="myconsum_1">
                                <Grid className="myconsum_4">
                                    <h5>Delivered Duty Paid (DDP)</h5>
                                    <img src={props.img_8} alt="" />
                                    <span>include shipping and duty fees</span>
                                </Grid>
                                <Grid className="myconsum_5">
                                    <img className="myimg" src={props.img_9} alt="" />
                                </Grid>
                            </Grid>
                            <Grid className="myconsum_1">
                                <Grid className="myconsum_6">
                                    <h5>{props.text7}</h5>
                                    <br />
                                </Grid>
                                <Grid className="myconsum_5">
                                    <img className="myimg" src={props.img_10} alt="" />
                                </Grid>
                            </Grid>
                            <Grid className="myconsum_1">
                                <Grid className="myconsum_6">
                                    <h5>{props.text8}</h5>
                                    <br />
                                </Grid>
                                <Grid className="myconsum_5">
                                    <img className="myimg" src={props.img_11} alt="" />
                                </Grid>
                            </Grid>
                            <Grid className="myconsum_1">
                                <Grid className="myconsum_6">
                                    <h5>{props.text9}</h5>
                                    <br />
                                </Grid>
                                <Grid className="myconsum_5">
                                    <img className="myimg"src={props.img_12} alt="" />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}