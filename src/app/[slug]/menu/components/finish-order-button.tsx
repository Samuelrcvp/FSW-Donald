"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {z} from "zod";

import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { isValidCpf } from "../helpers/cpf";

  const formSchema = z.object({
    name: z.string().trim().min(1, {

        message: 'O nome é obrigatório.',
    }),
    cpf: z.string().refine((value) => isValidCpf(value),{
        message:"CPF inválido.",
    }),
  });
  
  type FormSchema = z.infer<typeof formSchema>

const FinishOrderButton = () => {
    const form = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
    });
    const onSubmit = (data: FormSchema) =>{
        console.log({data});
    };
    return ( 
        <Drawer>
            <DrawerTrigger asChild>
                <Button className="w-full rounded-full">Finalizar pedido</Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Finalizar pedido </DrawerTitle>
                    <DrawerDescription>
                        Insira suas informações abaixo para finalizar o seu pedido.
                    </DrawerDescription>
                </DrawerHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Seu nome</FormLabel>
                                <FormControl>
                                <Input placeholder="Digite seu nome..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <DrawerFooter>
                            <Button>Submit</Button>
                            <DrawerClose>
                                <Button variant="outline">Cancelar</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </form>
                </Form>
            </DrawerContent>
        </Drawer>
    );
};
 
export default FinishOrderButton;