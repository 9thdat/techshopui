import { Col, Container, Row, Spinner, Button } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { useEffect, useState, useCallback } from "react";

import { HorizontalLine, ProductCard } from "../../components";
import { useContextData } from "../../hooks";


const Products = () => {

    useEffect(() => {
        document.title = "Products - Techshop";
    }, [])

    const { products } = useContextData();

    const params = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [params])

    const category = params.category.toLocaleLowerCase();

    const [_products, setProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (products && products.length > 0) {

            let categoryID = -1;

            if (category === "phone") categoryID = 1;
            else if (category === "adapter") categoryID = 2;
            else if (category === "cable") categoryID = 3;
            else if (category === "backupcharger") categoryID = 4;

            let pTemp = products.filter(item => item.category === categoryID);

            if (params.brand) {
                pTemp = pTemp.filter(item => item.brand === params.brand);
            }

            setProducts(pTemp);

            setIsLoading(false);
        }
        else {
            setIsLoading(true);
        }
    }, [category, products, params.brand])

    const getTitle = useCallback(() => {
        switch (category) {
            case "phone":
                return "Điện thoại";
            case "cable":
                return "Dây sạc";
            case "backupcharger":
                return "Sạc dự phòng";
            case "adapter":
                return "Củ sạc";
            default: ;
        }
    }, [category]);

    const handleSortName = () => {
        const sortedProducts = [..._products].sort((a, b) => a.name.localeCompare(b.name));
        setProducts(sortedProducts);
    }

    const handleSortNameDesc = () => {
        const sortedProducts = [..._products].sort((a, b) => b.name.localeCompare(a.name));
        setProducts(sortedProducts);
    }

    const handleSortPrice = () => {
        const sortedProducts = [..._products].sort((a, b) => a.price - b.price);
        setProducts(sortedProducts);
    }

    const handleSortPriceDesc = () => {
        const sortedProducts = [..._products].sort((a, b) => b.price - a.price);
        setProducts(sortedProducts);
    }

    const handleSortROM = () => {

    }

    const handleSortROMDesc = () => {

    }

    const handleSortRAM = () => {

    }

    const handleSortRAMDesc = () => {

    }

    const handleSortCapacity = () => {

    }

    const handleSortCapacityDesc = () => {

    }

    const handleSortP = () => {

    }
    const handleSortPDesc = () => {

    }

    return (
        !isLoading
            ?
            _products && _products.length > 0
                ?
                <Container>
                    <Row>
                        <Container className="mt-3 mb-3 bg-white rounded">
                            <div align="center" className="fs-1 fw-bolder text-secondary text-capitalize">{getTitle()}</div>
                        </Container>
                    </Row>
                    <HorizontalLine className="mt-3" />
                    <Row>
                        <Col md="auto" className="fs-2 fw-bold text-secondary">Lọc theo:</Col>
                        <Col>
                            <Button
                                style={{ marginRight: "0.5rem" }}
                                className="mt-3"
                                variant="outline-secondary"
                                size="lg"
                                onClick={handleSortName}
                            >
                                {"A-Z"}
                            </Button>

                            <Button
                                style={{ marginRight: "0.5rem" }}
                                className="mt-3"
                                variant="outline-secondary"
                                size="lg"
                                onClick={handleSortNameDesc}
                            >
                                {"Z-A"}
                            </Button>

                            <Button
                                style={{ marginRight: "0.5rem" }}
                                className="mt-3"
                                variant="outline-secondary"
                                size="lg"
                                onClick={handleSortPriceDesc}
                            >
                                {"Cao-Thấp"}
                            </Button>

                            <Button
                                style={{ marginRight: "0.5rem" }}
                                className="mt-3"
                                variant="outline-secondary"
                                size="lg"
                                onClick={handleSortPrice}
                            >
                                {"Thấp-Cao"}
                            </Button>

                            {
                                category === "phone" &&
                                <>
                                    <Button
                                        style={{ marginRight: "0.5rem" }}
                                        className="mt-3"
                                        variant="outline-secondary"
                                        size="lg"
                                        onClick={handleSortROM}
                                    >
                                        {"ROM(Thấp-Cao)"}
                                    </Button>

                                    <Button
                                        style={{ marginRight: "0.5rem" }}
                                        className="mt-3"
                                        variant="outline-secondary"
                                        size="lg"
                                        onClick={handleSortROMDesc}
                                    >
                                        {"ROM(Cao-Thấp)"}
                                    </Button>

                                    <Button
                                        style={{ marginRight: "0.5rem" }}
                                        className="mt-3"
                                        variant="outline-secondary"
                                        size="lg"
                                        onClick={handleSortRAM}
                                    >
                                        {"RAM(Thấp-Cao)"}
                                    </Button>

                                    <Button
                                        style={{ marginRight: "0.5rem" }}
                                        className="mt-3"
                                        variant="outline-secondary"
                                        size="lg"
                                        onClick={handleSortRAMDesc}
                                    >
                                        {"RAM(Cao-Thấp)"}
                                    </Button>
                                </>
                            }
                            {
                                category === 'backupcharger' &&
                                <>
                                    <Button
                                        style={{ marginRight: "0.5rem" }}
                                        className="mt-3"
                                        variant="outline-secondary"
                                        size="lg"
                                        onClick={handleSortCapacity}
                                    >
                                        {"Dung lượng(Cao-Thấp)"}
                                    </Button>

                                    <Button
                                        style={{ marginRight: "0.5rem" }}
                                        className="mt-3"
                                        variant="outline-secondary"
                                        size="lg"
                                        onClick={handleSortCapacityDesc}
                                    >
                                        {"Dung lượng(Thấp-Cao)"}
                                    </Button>
                                </>
                            }
                            {
                                category === 'cable' || category === 'adapter' ?
                                    <>
                                        <Button
                                            style={{ marginRight: "0.5rem" }}
                                            className="mt-3"
                                            variant="outline-secondary"
                                            size="lg"
                                            onClick={handleSortP}
                                        >
                                            {"Công suất(Cao-Thấp)"}
                                        </Button>
                                        <Button
                                            style={{ marginRight: "0.5rem" }}
                                            className="mt-3"
                                            variant="outline-secondary"
                                            size="lg"
                                            onClick={handleSortPDesc}
                                        >
                                            {"Công suất(Thấp-Cao)"}
                                        </Button>
                                    </> : <></>
                            }
                        </Col>
                    </Row>
                    <HorizontalLine className="mt-3 mb-3" />
                    <Row xs={2} sm={3} md={4} lg={5} xl={6} className="g-4">
                        {
                            _products.map(product => <Col key={product.id}><ProductCard product={product} /></Col>)
                        }
                    </Row>
                </Container>
                :
                <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
                    "Không có sản phẩm"
                </div>
            :
            <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
                <Spinner size="lg" />
            </div>
    )
}

export default Products;