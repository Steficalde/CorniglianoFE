import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../../../layouts/AdminLayout";

import React, { useContext, useEffect, useState } from "react";
import { SERVER_URL } from "../../../costants";
import { Auth } from "../../../types/auth";
import AuthContext from "../../../components/auth/AuthContext";
import LabelTextInput from "../../../components/input/LabelTextInput";
import { UserType } from "./user.type";
import Modal from "../../../components/Modal";

const AdminUser = () => {
  const { id } = useParams<{ id: string }>();
  const { authFetch } = useContext(AuthContext) as Auth;
  const [user, setUser] = useState<UserType | null>(null);
  const [status, setStatus] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const navigate = useNavigate();

  const changeModal = () => {
    setShow(!show);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const response = await authFetch(`${SERVER_URL}/users/${id}`);
      const data = await response.json();
      setUser(data);
    };
    fetchUser().catch(console.error);
  }, []);

  const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...(user as UserType), [name]: value });
  };


  const deleteUser = async () => {
    const responseUser = await authFetch(`${SERVER_URL}/users/${id}`, {
      method: "DELETE"
    });
    if (!responseUser.ok) {
      const data = await responseUser.json();
      setIsError(true);
      setStatus(data.message);
      return;
    } else {
      return navigate("/admin/users");
    }
  };

  const submit = async () => {
    const responseUser = await authFetch(`${SERVER_URL}/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        name: user?.name,
        email: user?.email,
      })
    });

    if (!responseUser.ok) {
      const data = await responseUser.json();
      setIsError(true);
      setStatus(data.message);
      return;
    } else {
      setIsError(false);
      setStatus("Modifica avvenuta con successo!");
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  };
  return (
    <AdminLayout>
      <h1>Utente {user?.id}</h1>
      <section className={"max-w-[600px] flex flex-col gap-4 mt-10"}>
        <label className="block text-lg font-medium mb-1">
          Ruolo: <span className="uppercase">{user?.role ?? "utente"}</span>
        </label>
        <LabelTextInput
          type={"text"}
          name={"name"}
          onChange={handleUserChange}
          value={user?.name ?? ""}
        ></LabelTextInput>
        <LabelTextInput
          type={"text"}
          name={"description"}
          onChange={handleUserChange}
          value={user?.email ?? ""}
        ></LabelTextInput>
        <div className={`${isError ? "text-red-700" : ""}`}>
          {status}
        </div>
        <div className="flex justify-end gap-4">
          <button onClick={changeModal} className="warn-button">
            Elimina
          </button>
          <button onClick={submit} className="primary-button">
            Salva
          </button>
        </div>
      </section>
      <Modal show={show} changeModal={changeModal} title={"Utente"}>
        <p className={"mb-4"}>Vuoi veramente cancellarlo?</p>
        <div className="flex justify-end gap-4">
          <button onClick={changeModal} className="prima-button">
            Annulla
          </button>
          <button onClick={async () => {
            await deleteUser();
            changeModal();
          }} className="warn-button">
            Conferma
          </button>
        </div>
      </Modal>
    </AdminLayout>
  );
};
export default AdminUser;
