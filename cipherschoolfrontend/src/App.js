import { useState } from "react";
import Login from "./Components/Login_Signup/Login";
import Signup from "./Components/Login_Signup/Signup";
import Modal from "./Components/Modal/Modal";
function App() {
  const [LoginModal, setLoginModal] = useState(false);
  const showLoginModal = () => {
    setLoginModal(true);
  };
  const [SignupModal, setSignupModal] = useState(true);
  const showSignupModal = () => {
    setLoginModal(true);
  };
  const closeModal = () => {
    setLoginModal(false);
    setSignupModal(false);
  };
  return (
    <div className="App">
      <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iste esse ratione beatae tempora. Repudiandae quo molestias explicabo necessitatibus eum eos omnis hic nobis dignissimos enim, illo consequuntur provident molestiae dolores fuga sapiente doloremque suscipit odit repellendus libero praesentium distinctio iusto impedit quam! Aut, explicabo modi accusamus ut sit sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quas quis veniam nam? Reprehenderit, neque facere assumenda obcaecati iusto error ab accusantium! Asperiores similique illum amet. Velit praesentium eaque quam nisi numquam commodi sapiente, amet harum? Quisquam, odit ea maxime quia consequuntur quos nemo laboriosam fugiat delectus dolorum perferendis, accusantium ullam reprehenderit ipsa! Exercitationem, iste? Sint cum dolores laudantium alias cumque veritatis numquam ipsa reiciendis, expedita aperiam aliquid modi consectetur, atque dignissimos laboriosam recusandae aspernatur, quidem voluptates corporis ullam sed quas dolor. Cumque libero cupiditate porro expedita officiis explicabo sint voluptatibus officia at tempore incidunt, tempora doloremque culpa exercitationem eligendi dignissimos quisquam suscipit aut consectetur nisi, esse neque? Dolore aspernatur quos excepturi at recusandae deserunt qui blanditiis quidem. Quam, laudantium cupiditate, laboriosam alias consectetur labore asperiores earum saepe nesciunt veniam eos praesentium voluptate, perspiciatis nobis facilis. Nulla quam numquam similique ratione laboriosam dolorum fugiat, ad quod tempora reiciendis inventore nobis dolore fugit commodi corporis eligendi cumque, est eum illum accusantium voluptatem sed sapiente modi! Accusantium enim vero excepturi voluptatum iste quae voluptatem autem ullam molestiae voluptates consequatur ipsum quidem obcaecati ducimus quos, tempore necessitatibus culpa. Dignissimos, corporis. Odio corporis quibusdam assumenda quia nemo dolorum voluptatum nihil asperiores, atque soluta commodi impedit autem, fugit cum culpa suscipit magnam porro ducimus nobis officia voluptates! Ab, suscipit cumque doloribus nostrum reiciendis ea. Quas veritatis consequuntur officiis, maiores sapiente iste illum incidunt quia. Autem, eligendi natus, optio maxime dolorem veritatis dicta adipisci tempora, atque porro consequatur explicabo enim neque? Debitis accusantium esse repellendus amet sequi aliquid magnam dolores adipisci, saepe perspiciatis sint dolorem magni odit? Dicta ea quidem quis iste consectetur natus libero voluptatem vitae, saepe non ipsum magnam aspernatur qui, cum velit illo accusamus blanditiis, dolore ducimus veritatis pariatur numquam ex quibusdam. Recusandae voluptatum non, praesentium quo suscipit voluptatibus impedit ipsam porro nostrum, dolorum esse quibusdam, ducimus cum maxime veniam minus beatae eligendi adipisci quis? Qui, voluptate animi? Rerum quibusdam dolorem et sunt aliquid at, nam architecto earum asperiores blanditiis iure. Fugit nemo quibusdam harum perferendis a facilis quia explicabo soluta aliquid, quod iste porro! Sunt ea itaque quia vitae nisi assumenda ipsa, aut laboriosam iusto deleniti commodi repudiandae quo? Eos iure, laborum asperiores cupiditate assumenda sed nesciunt quibusdam! Repellendus porro rem maiores consequuntur suscipit! Placeat saepe aliquam porro cupiditate magnam ipsum, esse quia impedit culpa quos tenetur mollitia temporibus excepturi provident sed recusandae, cumque beatae! Voluptatem veritatis iste dicta sequi similique pariatur itaque tenetur? Atque quam tenetur at sed laborum enim distinctio minima voluptatem exercitationem unde dolore alias iusto sunt quisquam maxime molestiae ipsum veniam voluptates, ex nisi quidem ipsam magnam ducimus? Atque, sunt. Nesciunt nobis sequi quaerat tenetur, modi dignissimos maxime cupiditate voluptatem minus repellendus, natus ipsa optio veritatis ducimus soluta tempora nam obcaecati. Earum veniam fugiat quod ducimus corrupti at deleniti et dignissimos labore nulla animi itaque, cupiditate, nobis numquam? Quod sint corporis molestiae perspiciatis sequi rerum aperiam vitae distinctio unde reiciendis. Similique voluptas, mollitia, quam voluptatibus et, fugiat accusamus corrupti sequi libero rem repellendus rerum vel sed tempore aliquid.
      </div>
      <Modal show={LoginModal} close_modal={closeModal}>
        <Login/>
      </Modal>
      <Modal show={SignupModal} close_modal={closeModal}>
        <Signup/>
      </Modal>
    </div>
  );
}

export default App;
