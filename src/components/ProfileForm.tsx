import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FormInput } from "./FormInput";

const schema = z.object({
  username: z.string().min(4, "名前は4文字以上で入力してください"),
  email: z.string().email("正しいメールアドレスを入力してください"),
  profileUrl: z.string().url("正しいURLを入力してください"),
});

export type ProfileFormData = z.infer<typeof schema>;

export const ProfileForm = () => {
  const form = useForm<ProfileFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      email: "",
      profileUrl: "",
    },
  });

  const { handleSubmit, control } = form;

  const onSubmit: SubmitHandler<ProfileFormData> = (data: ProfileFormData) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={control}
          name="username"
          render={({ field }) => (
            <FormInput label="ユーザー名">
              <Input {...field} />
            </FormInput>
          )}
        />
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormInput label="メールアドレス">
              <Input {...field} />
            </FormInput>
          )}
        />
        <FormField
          control={control}
          name="profileUrl"
          render={({ field }) => (
            <FormInput label="プロフィールURL">
              <Input {...field} />
            </FormInput>
          )}
        />
        <Button type="submit" className="w-full">
          送信
        </Button>
      </form>
    </Form>
  );
};
