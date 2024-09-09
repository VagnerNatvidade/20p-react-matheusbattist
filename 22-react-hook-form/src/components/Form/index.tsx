import { useForms } from "../../hooks/useForms";
import { FormSchema } from "../../schemas/FormSchema";

const Form = () => {
  const { register, handleSubmit, errors } = useForms();

  function onSubmit(data: FormSchema) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-96 bg-white p-4 rounded-md border border-slate-300"
    >
      <div className="flex flex-col gap-2 nb-2">
        <label htmlFor="name">Nome:</label>
        <input
          className="h-10 pl-2 rounded-md borer border-slate-300"
          type="text"
          id="name"
          {...register("name")}
          placeholder="Digite seu nome..."
        />
        {errors.name && (
          <small className="text-red-500 italic">{errors.name.message}</small>
        )}
      </div>
      <div className="flex flex-col gap-2 nb-2">
        <label htmlFor="lastname">Sobrenome:</label>
        <input
          className="h-10 pl-2 rounded-md borer border-slate-300"
          type="text"
          id="lastname"
          {...register("lastname")}
          placeholder="Digite seu sobrenome..."
        />
        {errors.lastname && (
          <small className="text-red-500 italic">
            {errors.lastname.message}
          </small>
        )}
      </div>
      <div className="flex flex-col gap-2 nb-2">
        <label htmlFor="gender">Gênero:</label>
        <select
          id="gender"
          {...register("gender")}
          className="h-10 pl-1 rounded-md borer border-slate-300"
        >
          <option value="select">Select</option>
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
          <option value="other">Outro</option>
        </select>
        {errors.gender && (
          <small className="text-red-500 italic">{errors.gender.message}</small>
        )}
      </div>
      <div className="flex flex-col gap-2 nb-2">
        <label htmlFor="email">Email:</label>
        <input
          className="h-10 pl-2 rounded-md borer border-slate-300"
          type="text"
          id="email"
          {...register("email")}
          placeholder="Digite seu email..."
        />
        {errors.email && (
          <small className="text-red-500 italic">{errors.email.message}</small>
        )}
      </div>
      <div className="flex flex-col gap-2 nb-2">
        <label htmlFor="password">Senha:</label>
        <input
          className="h-10 pl-2 rounded-md borer border-slate-300"
          type="text"
          id="password"
          {...register("password")}
          placeholder="Digite sua senha..."
        />
        {errors.password && (
          <small className="text-red-500 italic">
            {errors.password.message}
          </small>
        )}
      </div>
      <div className="flex flex-col gap-2 nb-2">
        <label htmlFor="confirmpassword">Confirmação de senha:</label>
        <input
          className="h-10 pl-2 rounded-md borer border-slate-300"
          type="text"
          id="confirmpassword"
          {...register("confirmpassword")}
          placeholder="Digite sua senha..."
        />
        {errors.confirmpassword && (
          <small className="text-red-500 italic">
            {errors.confirmpassword.message}
          </small>
        )}
      </div>
      <div className="flex flex-col gap-2 nb-2">
        <div className="flex gap-2">
          <input
            type="checkbox"
            id="agree"
            {...register("agree")}
            placeholder="Digite sua senha..."
          />
          <label htmlFor="agree">Confirmação de senha:</label>
          {errors.agree && (
            <small className="text-red-500 italic">
              {errors.agree.message}
            </small>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="w-full h-11 bg-cyan-400 rounded-md my-2 hover:bg-cyan-500 transition-all"
      >
        Cadastrar
      </button>
    </form>
  );
};

export default Form;
