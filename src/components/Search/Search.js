import React from 'react';
import {Row, Col, Form, Card, Overlay, Button} from 'react-bootstrap';

const Search = ({search, results, selectResult}) => {
    const target = React.useRef(null);
    const [show, setShow] = React.useState(true);

    const handleSearch = (event) => {
        search(event.target.value);
        setShow(true);
        if(event.target.value==="") {
            setShow(false);
        }

    }
    return(
        <div className="search">
            <Form className="searchField">
              <Form.Group controlId="search">
                <Form.Control className="searchBox" type="text" placeholder="Search Movie Title..." ref={target} onChange={(event) => handleSearch(event) } autoComplete="off" />
              </Form.Group>
            </Form>
            <Overlay className="searchResults" target={target.current} show={show} placement="bottom">
                {({ placement, arrowProps, show: _show, popper, ...props }) => (
                <div
                    {...props}
                    style={{
                    ...props.style,
                    color: 'white',
                    }}
                    className="resultOverlay"
                >
                    {results.map(result => {
                        return(
                            <p key={result.id} onClick={() => {selectResult(result); setShow(false);}}>{result.title}</p>
                        );
                    })}
                </div>
                )}
            </Overlay>
        </div>
    );
}

export default Search;