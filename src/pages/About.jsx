import "./About.style.css";
export function About() {
  return (
    <div className="content">
      <div className="about-container">
        <h2>About Todo-Tastic ✍️</h2>
        <p>
          Welcome to <strong>Todo-Tastic</strong>, your ultimate productivity
          companion! This app was born out of a simple idea: to help people
          organize their lives and achieve their goals with ease. Whether you're
          managing your daily tasks, planning a big project, or just trying to
          stay on top of things, Todo-Tastic is here to make your life simpler
          and more efficient. 💪
        </p>
        <p>
          The journey of Todo-Tastic began as a small side project during a
          rainy weekend. I really wanted a tool that was not only functional but
          also intuitive and visually appealing. After countless cups of coffee
          and late-night coding sessions, Todo-Tastic came to life. It has since
          evolved into a powerful yet user-friendly application that helps users
          stay organized and productive.
        </p>
        <br />
        <hr />
        <br />
        <h2>About the Author 👩‍💻</h2>
        <p>
          Nathalie is a passionate software developer with a love for creating
          meaningful and impactful applications. With a background in web
          development and a keen eye for design, Nathalie strives to build tools
          that are both functional and beautiful. When she's not coding, you can
          find her exploring nature, traveling, or experimenting with new cake
          recipes. 🍰
        </p>
        <p>
          Nathalie believes in the power of technology to improve lives and is
          dedicated to creating solutions that make a difference. Todo-Tastic is
          a reflection of her commitment to helping others stay organized and
          achieve their goals.
        </p>
        <br />
        <hr />
        <br />
        <p className="thank-you">
          Thank you for using Todo-Tastic! If you have any feedback or
          suggestions, feel free to reach out. 💌 <br />
          <span>Together, let's make productivity a breeze!</span>
        </p>
      </div>
    </div>
  );
}
