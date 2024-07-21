"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PasswordInput from "@/components/common/PasswordInput";
import { LoginValues, loginSchema } from "@/lib/validation";
import { login } from "@/app/(auth)/login/actions";
import LoadingButton from "@/components/common/LoadingButton";

const LoginForm = () => {
  const [error, setError] = React.useState<string>();
  const [isPending, startTransition] = React.useTransition();
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginValues) {
    setError(undefined);
    console.log("clicked");

    startTransition(async () => {
      const { error } = await login(values);
      if (error) {
        setError(error);
      }
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={"grid gap-6"}>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="grid gap-1">
              <FormLabel className="sr-only" htmlFor="email">
                Username
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="joe"
                  autoCapitalize="none"
                  autoComplete="off"
                  autoCorrect="off"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="grid gap-1">
              <FormLabel className="sr-only" htmlFor="email">
                Password
              </FormLabel>
              <FormControl>
                <PasswordInput placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoadingButton loading={isPending} type="submit">
          Login
        </LoadingButton>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button">
        Google
      </Button>
    </Form>
  );
};

export default LoginForm;
