import {
  Modal,
  ModalOpenButton,
  ModalCloseButton,
  ModalContent,
} from "components/Modal";
import styled from "styled-components/macro";

function Home() {
  return (
    <div
      css={`
        min-height: 100vh;
        background: url("https://images.adsttc.com/media/images/5f17/67a5/b357/65a5/ed00/0076/large_jpg/Luuk_Kramer_study_library_19260-101.jpg?1595369364")
          no-repeat center/cover;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div>
        <Modal>
          <ModalOpenButton>
            <button
              css={`
                color: #fff;
                background: #3f5eb5;
                border: none;
                padding: 1rem 1.5rem;
                border-radius: 5px;
                font-size: 1.7rem;
                &:hover {
                  cursor: pointer;
                }
                &:focus {
                  outline: none;
                }
              `}
            >
              Login
            </button>
          </ModalOpenButton>
          <ModalContent>
            <div
              css={`
                border: solid 3px #fff;
                border-radius: 10px;
                background: rgba(50, 50, 50, 0.7);
                width: 60rem;
                backdrop-filter: blur(3px);
              `}
            >
              <form
                css={`
                  width: 60%;
                  margin: auto;
                  color: #fff;
                  display: grid;
                  grid-gap: 2.5rem 0;
                  padding: 2.5rem 0;
                `}
              >
                <h2
                  css={`
                    font-size: 2.5rem;
                  `}
                >
                  User Login
                </h2>
                <div
                  css={`
                    display: flex;
                    flex-direction: column;
                  `}
                >
                  <label
                    css={`
                      font-size: 1.7rem;
                    `}
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    css={`
                      padding: 1rem;
                    `}
                  />
                </div>
                <div
                  css={`
                    display: flex;
                    flex-direction: column;
                  `}
                >
                  <label
                    css={`
                      font-size: 1.7rem;
                    `}
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    css={`
                      padding: 1rem;
                    `}
                  />
                </div>
                <div
                  css={`
                    display: flex;
                  `}
                >
                  <button
                    css={`
                      color: #fff;
                      background: #3f5eb5;
                      border: none;
                      padding: 1rem 1.5rem;
                      border-radius: 5px;
                      font-size: 1.7rem;
                      flex: 1;
                      margin-right: 1rem;
                      &:hover {
                        cursor: pointer;
                      }
                      &:focus {
                        outline: none;
                      }
                    `}
                  >
                    Login
                  </button>
                  <ModalCloseButton>
                    <button
                      css={`
                        color: #fff;
                        background: #888;
                        border: none;
                        padding: 1rem 1.5rem;
                        border-radius: 5px;
                        font-size: 1.7rem;
                        flex: 1;
                        margin-left: 1rem;
                        &:hover {
                          cursor: pointer;
                        }
                        &:focus {
                          outline: none;
                        }
                      `}
                    >
                      Cancel
                    </button>
                  </ModalCloseButton>
                </div>
              </form>
            </div>
          </ModalContent>
        </Modal>
        <button
          css={`
            color: #fff;
            background: #ab4e52;
            border: none;
            padding: 1rem 1.5rem;
            border-radius: 5px;
            font-size: 1.7rem;
            flex: 1;
            margin-right: 1rem;
            &:hover {
              cursor: pointer;
            }
            &:focus {
              outline: none;
            }
          `}
        >
          <i className="fab fa-google"></i>
          Login
        </button>
      </div>
    </div>
  );
}

export function getServerSideProps() {
  return {
    redirect: {
      destination: "/discover",
    },
  };
}

export default Home;
