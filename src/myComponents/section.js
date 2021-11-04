import Grid from '@mui/material/Grid';
import MySlider from '../myComponents/slider';
import NewArrival from './newArrival';

export default function MySection() {
    return (
        <>
            <Grid className="section">
                <Grid >
                    <MySlider />
                </Grid>
                <Grid className="mt-4 d-flex justify-content-center">
                    <NewArrival
                        text={" New Arrivals"}
                        img={"https://img.alicdn.com/tfs/TB1jyqhzy_1gK0jSZFqXXcpaXXa-44-44.png"}
                        imgs={"https://s.alicdn.com/@sc04/kf/H995f41844a514e86aa69c01ec95cb8451.jpg_120x120.jpg"}
                        text_1={"$4.59"}
                        text_2={"Trending Now"}
                        imgs_1={"https://s.alicdn.com/@sc04/kf/H7863b5a936ba4c9584a6a3a07fb11228p.jpg_120x120.jpg"}
                        text_3={"$8.00"}
                        text_4={"Trending Now"}
                        imgs_2={"https://s.alicdn.com/@sc04/kf/H2ecbb140c379453b8b54b6d9676fc179o.jpg_120x120.jpg"}
                        text_5={"$2.00"}
                        text_6={"Trending Now"}
                    />
                    <NewArrival
                        text={" Top-ranked Products"}
                        img={"https://img.alicdn.com/tfs/TB1jyqhzy_1gK0jSZFqXXcpaXXa-44-44.png"}
                        imgs={"https://s.alicdn.com/@sc04/kf/Hd70554d513594a089c09783fce08e55bD.jpg_120x120xz.jpg"}
                        text_1={"$42.57"}
                        text_2={"1 Piece"}
                        imgs_1={"https://s.alicdn.com/@sc04/kf/H28c133f60ee04d9ea9ab653ef1ad5c52r.jpg_120x120xz.jpg"}
                        text_3={"$6.97"}
                        text_4={"1 Unit"}
                        imgs_2={"https://s.alicdn.com/@sc04/kf/H6028d43b19ad48b0a487908a29644ed6R.jpg_120x120xz.jpg"}
                        text_5={"$39.54"}
                        text_6={"1 Piece"}
                    />
                    <NewArrival
                        text={" Top-ranked Products"}
                        img={"https://img.alicdn.com/tfs/TB1jyqhzy_1gK0jSZFqXXcpaXXa-44-44.png"}
                        imgs={"https://s.alicdn.com/@sc04/kf/H0b935b0465964389a20b60191178ab93A.png_120x120xz.jpg"}
                        text_1={"$9.50"}
                        text_2={"1 Piece"}
                        imgs_2={"https://s.alicdn.com/@sc04/kf/H8ac9f33c50624b9bbdaf3ad75847ab61W.jpg_120x120xz.jpg"}
                        text_5={"$1.01"}
                        text_4={"1 Unit"}
                        imgs_1={"https://s.alicdn.com/@sc04/kf/H49c38e30fd8c48b4ac0a4c66aa3649c2O.jpg_120x120xz.jpg"}
                        text_3={"$39.54"}
                        text_6={"1 Piece"}
                    />
                </Grid>
                <Grid className="mt-4 d-flex justify-content-center">
                    <NewArrival
                        text={" Top-ranked Products"}
                        img={"https://img.alicdn.com/tfs/TB1jyqhzy_1gK0jSZFqXXcpaXXa-44-44.png"}
                        imgs={"https://s.alicdn.com/@sc04/kf/H53c8e34332694dcab73f0178470416da7.jpg_120x120xz.jpg"}
                        text_1={"$42.57"}
                        text_2={"1 Piece"}
                        imgs_1={"https://s.alicdn.com/@sc04/kf/H90a7532d297b4d6abbe0dab380c1fbee4.jpg_120x120xz.jpg"}
                        text_3={"$6.97"}
                        text_4={"1 Unit"}
                        imgs_2={"https://s.alicdn.com/@sc04/kf/H6028d43b19ad48b0a487908a29644ed6R.jpg_120x120xz.jpg"}
                        text_5={"$39.54"}
                        text_6={"1 Piece"}
                    />
                    <NewArrival
                        text={" Top-ranked Products"}
                        img={"https://img.alicdn.com/tfs/TB1jyqhzy_1gK0jSZFqXXcpaXXa-44-44.png"}
                        imgs={"https://s.alicdn.com/@sc04/kf/Hd70554d513594a089c09783fce08e55bD.jpg_120x120xz.jpg"}
                        text_1={"$42.57"}
                        text_2={"1 Piece"}
                        imgs_1={"https://s.alicdn.com/@sc04/kf/H28c133f60ee04d9ea9ab653ef1ad5c52r.jpg_120x120xz.jpg"}
                        text_3={"$6.97"}
                        text_4={"1 Unit"}
                        imgs_2={"https://s.alicdn.com/@sc04/kf/H6028d43b19ad48b0a487908a29644ed6R.jpg_120x120xz.jpg"}
                        text_5={"$39.54"}
                        text_6={"1 Piece"}
                    />
                    <NewArrival
                        text={" Top-ranked Products"}
                        img={"https://img.alicdn.com/tfs/TB1jyqhzy_1gK0jSZFqXXcpaXXa-44-44.png"}
                        imgs={"https://s.alicdn.com/@sc04/kf/Hd70554d513594a089c09783fce08e55bD.jpg_120x120xz.jpg"}
                        text_1={"$42.57"}
                        text_2={"1 Piece"}
                        imgs_1={"https://s.alicdn.com/@sc04/kf/H28c133f60ee04d9ea9ab653ef1ad5c52r.jpg_120x120xz.jpg"}
                        text_3={"$6.97"}
                        text_4={"1 Unit"}
                        imgs_2={"https://s.alicdn.com/@sc04/kf/H6028d43b19ad48b0a487908a29644ed6R.jpg_120x120xz.jpg"}
                        text_5={"$39.54"}
                        text_6={"1 Piece"}
                    />
                </Grid>
            </Grid>
        </>
    );
}