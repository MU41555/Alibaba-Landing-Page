import * as React from 'react';
import Grid from '@mui/material/Grid';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

export default function MySlider() {
    return (
        <Grid container className="list_1">
            <Grid item xs={2.6} className="list_2">
                <Grid className="list_3">MY MARKETS</Grid>
                <Grid className="list_4">
                    <ul >
                        <li><img src="https://sc02.alicdn.com/kf/HTB12RuNUmzqK1RjSZFH7623CpXa6.png_50x50xz.jpg" alt="" /> Consumer Electronics <KeyboardArrowRightOutlinedIcon sx={{ marginLeft: "4.7rem", color: "#bdbdbd" }} /></li>
                        <li><img src="https://sc02.alicdn.com/kf/HTB1gUuPUkzoK1RjSZFl761i4VXaw.png_50x50xz.jpg" alt="" /> Apparel <KeyboardArrowRightOutlinedIcon sx={{ marginLeft: "10.3rem", color: "#bdbdbd" }} /></li>
                        <li><img src="https://sc02.alicdn.com/kf/HTB1JdWLUhTpK1RjSZR0762EwXXa6.png_50x50xz.jpg" alt="" /> Vehicles & Accessories <KeyboardArrowRightOutlinedIcon sx={{ marginLeft: "4.2rem", color: "#bdbdbd" }} /></li>
                        <li><img src="https://sc02.alicdn.com/kf/HTB1AkuTUgHqK1RjSZJn762NLpXa2.png_50x50xz.jpg" alt="" /> Sports & Entertainment <KeyboardArrowRightOutlinedIcon sx={{ marginLeft: "3.8rem", color: "#bdbdbd" }} /></li>
                        <li><img src="https://sc02.alicdn.com/kf/H5e92ef24edc94162b72c331cbd6fbe6fn.png_50x50xz.jpg" alt="" /> Machinery <KeyboardArrowRightOutlinedIcon sx={{ marginLeft: "9.2rem", color: "#bdbdbd" }} /></li>
                        <li><img src="https://sc02.alicdn.com/kf/HTB1RxCkXHys3KVjSZFn760FzpXaP.png_50x50xz.jpg" alt="" /> Home & Garden <KeyboardArrowRightOutlinedIcon sx={{ marginLeft: "6.7rem", color: "#bdbdbd" }} /></li>
                        <li><img src="https://sc02.alicdn.com/kf/HTB1K6G0UcfpK1RjSZFO7616nFXah.png_50x50xz.jpg" alt="" /> Beauty & Personal Care <KeyboardArrowRightOutlinedIcon sx={{ marginLeft: "3.7rem", color: "#bdbdbd" }} /></li>
                        <li style={{ paddingLeft: ".3rem" }}><img style={{ width: "20px", height: "20px" }} src="https://img.alicdn.com/tfs/TB1SFxHuVY7gK0jSZKzXXaikpXa-36-36.png" alt="" /> All Categories <KeyboardArrowRightOutlinedIcon sx={{ marginLeft: "8rem", color: "#bdbdbd" }} /></li>
                    </ul>
                    <ul>

                    </ul>


                </Grid>
            </Grid>
            <Grid item xs={7} className="slider">
                <Grid className="slider_1">
                    <Grid id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <Grid className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button> */}
                        </Grid>
                        <Grid className="carousel-inner">
                            <Grid className="carousel-item active">
                                <img src="https://s.alicdn.com/@img/imgextra/i2/O1CN01UKsNwd1QnfAFepFwM_!!6000000002021-2-tps-990-400.png" className="d-block w-100 slider_img" alt="..." />
                            </Grid>
                            <Grid className="carousel-item">
                                <img src="https://s.alicdn.com/@img/imgextra/i3/O1CN01QEL53b1ZNOzSa5hHT_!!6000000003182-0-tps-990-400.jpg" className="d-block w-100" alt="..." />
                            </Grid>
                            <Grid className="carousel-item">
                                <img src="https://s.alicdn.com/@img/imgextra/i3/O1CN01VNUdjq1ftoijrNU7P_!!6000000004065-2-tps-990-400.png" className="d-block w-100" alt="..." />
                            </Grid>
                            {/* <Grid className="carousel-item">
                                <img src="https://s.alicdn.com/@img/tfs/TB1e.XyReL2gK0jSZFmXXc7iXXa-990-400.png" className="d-block w-100" alt="..." />
                            </Grid>
                            <Grid className="carousel-item">
                                <img src="https://s.alicdn.com/@img/imgextra/i2/O1CN01tzlNNl28xaqEZItHA_!!6000000007999-0-tps-990-400.jpg" className="d-block w-100" alt="..." />
                            </Grid>
                            <Grid className="carousel-item">
                                <img src="https://s.alicdn.com/@img/imgextra/i2/O1CN01eDYIeP1DSyFsa06Oi_!!6000000000216-0-tps-990-400.jpg" className="d-block w-100" alt="..." />
                            </Grid>
                            <Grid className="carousel-item">
                                <img src="https://s.alicdn.com/@img/imgextra/i1/O1CN01aX23AE1uRABJ4InsG_!!6000000006033-0-tps-990-400.jpg" className="d-block w-100" alt="..." />
                            </Grid> */}
                        </Grid>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={2.4} className="list_5">
                <Grid className="list_6">
                    <img src="https://img.alicdn.com/imgextra/i1/O1CN01h1du8I1IZRwJhj11v_!!6000000000907-2-tps-102-36.png" alt="" />
                    <span className="text_2">Pro Buyer Exclusive</span>
                    <p className="text"> Get payment terms and much more</p>
                    <p className="text_1">Upgrade</p>
                </Grid>
                <Grid className="list_7">
                    <p>Home & Garden 2021 Online Trade</p>
                </Grid>
                <Grid className="list_8">
                    <Grid className="list_9">
                        <p>Home & Garden 2021 <br/> Online Trade Show</p> <img src="https://i.alicdn.com/img/imgextra/i3/O1CN01rHG3DG1wp66sdIKKe_!!6000000006356-2-tps-350-350.png_100x100.jpg" alt="" />
                    </Grid>
                    <Grid className="list_9">
                        <p>Digital Booths</p> <img src="https://i.alicdn.com/img/imgextra/i3/O1CN01i1pN3924J3K92CAMq_!!6000000007369-2-tps-350-350.png_100x100.jpg" alt="" />
                    </Grid>
                    <Grid className="list_9">
                        <p>Top-Ranking Products</p> <img src="https://i.alicdn.com/img/imgextra/i2/O1CN01IlZLHL1h7O4Zn6rIX_!!6000000004230-2-tps-350-350.png_100x100.jpg" alt="" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        
    );
}