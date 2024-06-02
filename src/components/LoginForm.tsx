import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

interface LoginFormData {
  name: string;
  email: string;
  password: string;
}

const validationSchema = z.object({
  name: z.string().min(4, "名前は4文字以上で入力してください"),
  email: z.string().email("正しいメールアドレスを入力してください"),
  password: z.string().min(6, "パスワードは6文字以上で入力してください"),
});

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    mode: "onChange",
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<LoginFormData> = (data) => console.log(data);

  return (
    <div className="form-container">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">名前</label>
        <input id="name" type="text" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}

        <label htmlFor="email">メールアドレス</label>
        <input id="email" type="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor="password">パスワード</label>
        <input id="password" type="password" {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">送信</button>
      </form>
    </div>
  );
};
