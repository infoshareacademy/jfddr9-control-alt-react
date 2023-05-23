import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Home = () => {
  return (
    <>
      <div className="home-frame">
        <div className="home">
          <div className="home-tile">
            <div className="image-container">
              <img
                src="/cocktail-home.png"
                alt="Photo of Drink made from Neon"
              />
            </div>
            <div className="text-container">
              <h1>
                Welcome to our exciting platform dedicated to cocktail mixing!
              </h1>
              <br />
              <p>
                Whether you're a seasoned bartender or just starting your
                mixology journey, our website is the perfect source of
                inspiration and knowledge.
              </p>
              <p>
                Browse recipes, add them to your favorites, and let us guide you
                through the fascinating world of cocktails!
              </p>
            </div>
          </div>
          <div className="home-tile">
            <div className="text-container">
              <h2>Craving a cocktail made with your favorite ingredients?</h2>
              <p>
                Our advanced search tool allows you to find the perfect recipe
                with ease. Simply enter the ingredients you have on hand, and
                we'll provide you with matching cocktails.
              </p>
              <p>
                Additionally, you can search our database by cocktail name,
                discovering new flavors and memorable names that will leave a
                lasting impression.
              </p>
            </div>
            <div className="image-container">
              <img
                src="/ingredient-search.png"
                alt="An image of a card with an example of a drink"
              />
            </div>
          </div>
          <div className="home-tile">
            <div className="image-container">
              <img
                src="/example-cocktail.png"
                alt="An image of a card with an example of a drink"
              />
            </div>
            <div className="text-container">
              <h2>
                You no longer have to look through hundreds of websites to find
                the perfect recipe for a drink!
              </h2>
              <p>
                On our website, you have the option to create a personalized
                list of favorite cocktails.
              </p>
              <p>
                Whether you've discovered a new flavor that captivates you or
                simply want quick access to your go-to drinks, our 'Favorites'
                feature lets you organize your collection and enjoy exquisite
                mixed beverages at any time."
              </p>
            </div>
          </div>
          <div className="home-tile">
            <div className="text-container">
              <h2>
                Looking to add an element of surprise to your cocktail
                experience?
              </h2>
              <p>
                Our website also offers a unique drink randomization feature.
                With just a click of a button, you can discover exciting new
                concoctions that you might have never tried before.
              </p>
              <p>Cheers to discovering the unexpected!</p>
            </div>
            <div className="image-container">
              <img
                src="/random-cocktail.png"
                alt="Picture showing the 'choose random drink card'"
              />
            </div>
          </div>
          <div className="home-tile">
            <div className="image-container">
              <img
                src="/cocktail-pour.png"
                alt="Picture showing glass with a liquid in it"
              />
            </div>
            <div className="text-container">
              <h2>
                Experience the joy of virtual mixology with our interactive
                drink pouring feature.
              </h2>
              <p>
                With just a click of the 'Mix' button, you can virtually pour
                your selected cocktail right before your eyes.
              </p>
              <p>
                {" "}
                So, grab a virtual shaker, click 'Mix,' and witness the magic
                unfold as your favorite cocktail comes to life in front of you.
              </p>
            </div>
          </div>

          <div className="home-tile">
            <div className="text-container">
              <h2>
                We are a group of individuals who share a common passion for web
                development.
              </h2>
              <p>
                As part of the JFDDR9 course at Infoshare, we have been diving
                deep into the world of coding and honing our skills in these
                technologies.
              </p>
              <p>
                Combining our newfound knowledge with our love for cocktails, we
                embarked on a project that seamlessly blends these two passions.
                Join us as we bring together the art of mixology and the power
                of web development.
              </p>
            </div>
            <div className="image-container">
              <img
                src="/teamwork.png"
                alt="Picture showing the 'choose random drink card'"
              />
            </div>
          </div>
          <div className="team-tile">
            <div>
              <h2>Our team</h2>
            </div>
            <div className="cards">
              <div className="card">
                <div className="card-name">
                  <span>Jakub Łuczkiewicz</span>
                </div>
                <div className="card-hidden">
                  <div className="card-img">
                    <img src="prezes.svg" alt="" />
                  </div>
                  <div className="card-title">
                    <p>
                      <span>
                        Main Software Engineer
                        <br />
                        CEO
                      </span>
                    </p>
                  </div>
                  <div className="card-text-drink">
                    <p>
                      Favorite drink:
                      <span> Bloody mary</span>
                    </p>
                  </div>
                  <div className="card-links">
                    <div className="card-links-github cards-link">
                      <a href="http://" target="blank">
                        <div className="card-links-icon">
                          <FontAwesomeIcon icon="fa-brands fa-github" />
                        </div>
                        <div className="card-links-text">
                          <p>JakubLuczkiewicz</p>
                        </div>
                      </a>
                    </div>
                    <div className="card-links-linkedin cards-link">
                      <a href="http://" target="blank">
                        <div className="card-links-icon">
                          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                        </div>
                        <div className="card-links-text">
                          <p>jakub-luczkiewicz</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-name">
                  <span>Magdalena Ledwoń</span>
                </div>
                <div className="card-hidden">
                  <div className="card-img">
                    <img src="/magda.svg" alt="" />
                  </div>
                  <div className="card-text">
                    <div className="card-text-role">
                      <p>
                        <span>Queen of Java Script</span>
                      </p>
                    </div>
                    <div className="card-text-drink">
                      <p>
                        Favorite drink:
                        <span> Martini</span>
                      </p>
                    </div>
                  </div>
                  <div className="card-links">
                    <div className="card-links-github cards-link">
                      <a href="http://" target="blank">
                        <div className="card-links-icon">
                          <FontAwesomeIcon icon="fa-brands fa-github" />
                        </div>
                        <div className="card-links-text">
                          <p>Magdalenaledwon</p>
                        </div>
                      </a>
                    </div>
                    <div className="card-links-linkedin cards-link">
                      <a href="http://" target="blank">
                        <div className="card-links-icon">
                          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                        </div>
                        <div className="card-links-text">
                          <p>magdalena-ledwoń-126492255</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-name">
                  <span>Szymon Lamparski</span>
                </div>

                <div className="card-hidden">
                  <div className="card-img">
                    <img src="/szymon.svg" alt="" />
                  </div>
                  <div className="card-text">
                    <div className="card-text-role">
                      <p>
                        <span>Lead Tech</span>
                      </p>
                    </div>
                    <div className="card-text-drink">
                      <p>
                        Favorite drink:
                        <span> Whiskey Sour</span>
                      </p>
                    </div>
                  </div>
                  <div className="card-links">
                    <div className="card-links-github cards-link">
                      <a href="http://" target="blank">
                        <div className="card-links-icon">
                          <FontAwesomeIcon icon="fa-brands fa-github" />
                        </div>
                        <div className="card-links-text">
                          <p>szylampa</p>
                        </div>
                      </a>
                    </div>
                    <div className="card-links-linkedin cards-link">
                      <a href="http://" target="blank">
                        <div className="card-links-icon">
                          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                        </div>
                        <div className="card-links-text">
                          <p>szylampa</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-name">
                  <span>Natalia Konopińska</span>
                </div>

                <div className="card-hidden">
                  <div className="card-img">
                    <img src="/natalia.svg" alt="" />
                  </div>
                  <div className="card-text">
                    <div className="card-text-role">
                      <p>
                        <span>Jira Master and Manager</span>
                      </p>
                    </div>
                    <div className="card-text-drink">
                      <p>
                        Favorite drink:
                        <span> Mojito</span>
                      </p>
                    </div>
                  </div>
                  <div className="card-links">
                    <div className="card-links-github cards-link">
                      <a href="http://" target="blank">
                        <div className="card-links-icon">
                          <FontAwesomeIcon icon="fa-brands fa-github" />
                        </div>
                        <div className="card-links-text">
                          <p>natalia-konopinska</p>
                        </div>
                      </a>
                    </div>
                    <div className="card-links-linkedin cards-link">
                      <a href="http://" target="blank">
                        <div className="card-links-icon">
                          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                        </div>
                        <div className="card-links-text">
                          <p>natalia-konopińska-638974268</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-name">
                  <span>Jakub Wiśniewski</span>
                </div>

                <div className="card-hidden">
                  <div className="card-img">
                    <img src="/jakub.svg" alt="" />
                  </div>
                  <div className="card-text">
                    <div className="card-text-role">
                      <p>
                        <span>Css Ninja and Code Master</span>
                      </p>
                    </div>
                    <div className="card-text-drink">
                      <p>
                        Favorite drink:
                        <span> Cuba libre</span>
                      </p>
                    </div>
                  </div>
                  <div className="card-links">
                    <div className="card-links-github cards-link">
                      <a href="http://" target="blank">
                        <div className="card-links-icon">
                          <FontAwesomeIcon icon="fa-brands fa-github" />
                        </div>
                        <div className="card-links-text">
                          <p>jakubrw</p>
                        </div>
                      </a>
                    </div>
                    <div className="card-links-linkedin cards-link">
                      <a href="http://" target="blank">
                        <div className="card-links-icon">
                          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                        </div>
                        <div className="card-links-text">
                          <p>jakub-wiśniewski-480156273</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-footer">
            <p>
              Due to the topic of alcohol, our application is for adults only.
              To take full advantage of its functionality, please register. The
              content we create for this site is meant to entertain and inspire
              other responsible adults of legal drinking age to try their hand
              at making cocktails and learn more about the alcohol and spirits
              behind the drinks. Don’t drink if you’re not of legal age.
            </p>
            <p>
              <span> Never drink and drive</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
