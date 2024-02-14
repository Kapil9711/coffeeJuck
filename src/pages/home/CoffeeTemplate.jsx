/* eslint-disable react/prop-types */ //
export default function CoffeeTemplate({ name, imgSrc, link }) {
  return (
    <>
      <h3>{name}</h3>
      <img src={imgSrc} />
      <p style={{ lineHeight: "20px", letterSpacing: "1px" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the s standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum. It is a long established fact that a reader will be distracted by
        the readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using here, content
      </p>
      <a href={link} target="_blank">
        Details
      </a>
    </>
  );
}
