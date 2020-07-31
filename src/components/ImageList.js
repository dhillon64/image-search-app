import React from "react";
import "./imageList.css";

class ImageList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const images = this.props.images.map((image) => {
      return (
        <img
          className="image"
          key={image.id}
          src={image.urls.regular}
          alt={image.description}
        />
      );
    });

    return <div className="grid-container">{images}</div>;
  }
}

export default ImageList;
