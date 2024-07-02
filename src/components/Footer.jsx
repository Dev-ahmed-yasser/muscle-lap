const year = new Date().getFullYear();
function Footer() {
  return (
    <section className="flex min-h-40 flex-col items-center justify-center gap-3 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold  md:text-3xl ">Made by Ahmed Yasser</h1>
      <h1 className="text-sm">Copyright &copy; {year} All rights reserved</h1>
    </section>
  );
}
export default Footer;
