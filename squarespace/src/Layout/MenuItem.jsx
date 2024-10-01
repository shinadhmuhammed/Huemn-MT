const MenuItem = ({ text, indented = false, bold = false }) => (
    <li className={`py-2 ${indented ? "pl-4" : ""}`}>
      <a
        href="#"
        className={`text-gray-600 hover:text-gray-800 ${
          bold ? "font-semibold" : ""
        }`}
      >
        {text}
      </a>
    </li>
  );

  export default MenuItem