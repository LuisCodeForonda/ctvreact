import { Link } from "react-router-dom";
import Layout from "./Layouts";
import ImageSlider from "./ImageSlider";

function Index() {

    return (
        <Layout>
            <div>
                <ImageSlider />
            </div>
        </Layout>
    );
}

export default Index;