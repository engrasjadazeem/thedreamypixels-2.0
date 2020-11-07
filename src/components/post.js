import React from 'react';

class Post extends React.Component {
  render() {
    return (
      <div className="col-md-4 col-sm-4 col-xs-6 col-xxs-12">
        <div className="img-grid">
          <img src={this.props.imageUrl} alt={this.props.imageAlt} className="img-responsive" />
          <a href={this.props.linkUrl} className="transition">
            <div>
              <span className="meta">{this.props.numberOfPhotos} images</span>
              <h2 className="title">{this.props.title}</h2>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Post;
