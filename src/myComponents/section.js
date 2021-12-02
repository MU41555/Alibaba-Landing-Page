import Grid from '@mui/material/Grid';
import MySlider from '../myComponents/slider';
import Consumer from './consumer';
import MyCard from './myCard';
import MyDeals from './mydeals';
import NewArrival from './newArrival';
import NewArrival_1 from './newArrival_1';
import Request from './requestPage';
import Service from './service';
import Supplier from './supplier';
import { newArrivalArray , newArrival_1Array , newarrivalArray , myServiceArray , mySupplierArray , myConsumerArray , myDealsArray, myCardArray, myCardArray_1} from './myArray';

export default function MySection() {

    function Newarrivals (val) {
        return (
            <NewArrival 
                a = {val.text_1}
                b = {val.img_1}
                c = {val.img_2}
                d = {val.img_3}
                e = {val.img_4}
                f = {val.text_2}
                g = {val.text_3}
                h = {val.text_4}
                i = {val.price_1}
                j = {val.price_2}
                k = {val.price_3}
            />
        );
    }

    function NewArrivals (val) {
        return (
            <NewArrival 
                a = {val.text_1}
                b = {val.img_1}
                c = {val.img_2}
                d = {val.img_3}
                e = {val.img_4}
                f = {val.text_2}
                g = {val.text_3}
                h = {val.text_4}
                i = {val.price_1}
                j = {val.price_2}
                k = {val.price_3}
            />
        );
    }

    function Newarrivals_1 (val) {
        return (
            <NewArrival_1 
                text_1 = {val.a}
                text_2 = {val.b}
                text_3 = {val.c}
                img_1 = {val.d}
                img_2 = {val.e}
                img_3 = {val.f}
                img_4 = {val.g}
                img_5 = {val.h}
                img_6 = {val.i}
                img_7 = {val.j}
                text_4 = {val.k}
                text_5 = {val.l}
            />
        );
    }

    function myConsumer (val) {
        return (
            <Consumer 
                img = {val.a}
                img_1 = {val.b}
                img_2 = {val.c}
                img_3 = {val.d}
                img_4 = {val.e}
                img_5 = {val.f}
                img_6 = {val.g}
                img_7 = {val.h}
                img_8 = {val.i}
                img_9 = {val.j}
                img_10 = {val.k}
                img_11 = {val.l}
                img_12 = {val.m}
                text1 = {val.n}
                text2 = {val.o}
                text3 = {val.p}
                text4 = {val.q}
                text5 = {val.r}
                text6 = {val.s}
                text7 = {val.t}
                text8 = {val.u}
                text9 = {val.v}
            />
        );
    }

    function myDeals (val) {
        return (
            <MyDeals 
                text = {val.a}
                img = {val.b}
                img_1 = {val.c}
                text_1 = {val.d}
                text_2 = {val.e}
            />
        );
    }

    function myCard (val) {
        return (
            <MyCard 
            img = {val.a}
            text = {val.b}
            text1 = {val.c}
            text2 = {val.d}
            />
        );
    }

    function myService (val) {
        return (
            <Service 
                text_1 = {val.a}
                text_2 = {val.b}
                text_3 = {val.c}
                img = {val.d}
                imgs = {val.e}
            />
        );
    }

    function mySupplier (val) {
        return (
            <Supplier 
                img = {val.a}
                text = {val.b}
            />
        );
    }

    return (
        <>
            <Grid className="section">
                <Grid >
                    <MySlider />
                </Grid>
                <Grid className="mt-4 d-flex justify-content-center">
                    {newArrivalArray.map(Newarrivals)}
                </Grid>
                <Grid className="mt-4 d-flex justify-content-center">
                    {newarrivalArray.map(NewArrivals)}  
                </Grid>
                <Grid className="mt-4 d-flex justify-content-center">
                    {newArrival_1Array.map(Newarrivals_1)}
                </Grid>
                <Grid className="mt-4">
                    {myConsumerArray.map(myConsumer)}
                </Grid>
                <Grid className="mt-4 deals_com">
                    {myDealsArray.map(myDeals)}
                </Grid>
                <Grid className="mt-4">
                    <Request />
                </Grid>
                <Grid className="mt-4">
                    <Grid className="text-white">
                        <h3>JUST FOR YOU</h3><hr />
                    </Grid>
                    <Grid className="mt-4 myCard">
                        {myCardArray.map(myCard)}
                    </Grid>
                    <Grid className="mt-4 myCard">
                        {myCardArray_1.map(myCard)}
                    </Grid>
                </Grid>
                <Grid className="mt-4">
                    <Grid className="service_2">
                        <h4>OUR TRADE SERVICES ARE HERE FOR YOU</h4>
                        <p>Alibaba.com's trade services help ensure that your purchases are protected.</p>
                    </Grid>
                    <Grid className="mt-4 myService">
                        {myServiceArray.map(myService)}
                    </Grid>
                </Grid>
                <Grid className="">
                    <Grid className="service_2">
                        <h4>CHOOSE YOUR SUPPLIERS BY REGIONS</h4>
                    </Grid>
                    <Grid className="myService">
                        {mySupplierArray.map(mySupplier)}
                        <p className="text-primary" style={{paddingTop:"20px"}}>More Regions</p>
                    </Grid>
                </Grid>
                <Grid className="mt-5 align-items-center">
                    <img style={{width:"1460px"}} src="https://i.alicdn.com/img/imgextra/i3/O1CN01g1wPLu1NaQsIkHE3s_!!6000000001586-2-tps-1500-60.png" />
                </Grid>
            </Grid>

        </>
    );
}