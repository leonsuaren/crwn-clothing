import React, { Fragment } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styled.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkURL: 'hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkURL: ''
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          id: 3,
          linkURL: ''
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkURL: ''
        },
        {
          title: 'men',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkURL: ''
        },
      ]
    }
  };
  render() {
    return (
      <Fragment>
        <div className="directory-menu">
          {
            this.state.sections.map(({ title, imageUrl, size, id, linkURL }) => {
              return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkURL={linkURL} />
            })
          }
        </div>
      </Fragment>
    );
  }
};

export default Directory;