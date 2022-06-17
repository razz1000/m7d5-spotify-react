import { Card, Button, Figure, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  song: state.selected.song,
});

const mapDispatchToProps = () => ({});

const DisplaySelected = ({ song }) => {
  return (
    <div>
      {console.log("SONG:", song)}
      <Container style={{ color: "red" }}>
        <Row>
          <Col>
            <Figure>
              <Figure.Image
                width={160}
                height={160}
                alt="171x180"
                src="http://placekitten.com/160/160"
              />
              <Figure.Caption></Figure.Caption>
            </Figure>
          </Col>
          <Col>
            {/*             <Row>{<p>{song.title}</p>}</Row>
            <Row>{<p>{song.artist.name}</p>}</Row> */}
          </Col>
          <Col>
            <Row>
              <i class="bi bi-heart"></i>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplaySelected);
