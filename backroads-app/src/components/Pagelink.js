const Pagelink = (link) => {
  const { href, text, className } = link;
  return (
    <li>
      <a href={href} className={className}>
        {text}
      </a>
    </li>
  );
};
export default Pagelink;
