import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => (
  <div>
    <Link to="/">
      <button type="button" className="back">
        {'<'}
        back
      </button>

    </Link>
    <div className="company-img" />
    <div className="company-details">
      <h5 className="company-name">Name</h5>
      <h6 className="company-symbol">SYMB</h6>
      <p className="stock">$100</p>
      <p className="country">Ghana</p>
      <p className="industry">Tech</p>
      <p className="details">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et laborum enim libero excepturi eum perspiciatis, cum incidunt facere? Nam, cupiditate placeat tenetur minima corporis molestiae est unde quas eligendi commodi quidem sequi, autem adipisci rem odio vero? Error architecto amet labore nulla iusto modi at, similique voluptas sit alias distinctio aspernatur sunt. Excepturi, minima. Unde magnam, delectus deleniti quae esse ex quasi soluta nam vitae possimus repellendus sequi, numquam aliquid rem sed asperiores. Voluptates recusandae veritatis laboriosam assumenda aliquid laborum deserunt quidem natus provident cum quaerat hic autem sunt eveniet illum culpa, suscipit, iste quia maxime, aliquam reprehenderit. Dignissimos quae porro mollitia voluptatem unde laboriosam accusamus. Officiis aperiam, est repudiandae inventore quis consequatur? Tenetur, veritatis error. Facere iste atque illo alias repudiandae deserunt sunt optio animi quibusdam excepturi beatae nesciunt dignissimos modi esse eaque ab minus, laboriosam, qui consequatur fugit vero dolore eligendi. Quasi blanditiis voluptatum impedit totam numquam explicabo.</p>

    </div>

  </div>
);

export default Profile;
