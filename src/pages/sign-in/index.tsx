import React, { FC, useRef, useCallback } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';
import { Container, Content, Background } from './styles';
import { Stack, Text, Input, Button, Logo, Box } from '../../design-system';
import { getValidationErrors } from '../../utils/get-validation-erros';

export const SignIn: FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um email válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <Box
          onClick={() => history.push('/')}
          htmlAttrs={{ style: { cursor: 'pointer' } }}
        >
          <Logo labelPosition="bottom" size={120} textSize="x3" />
        </Box>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Stack margin="x3">
            <Text as="h1" textSize="x4" textAlign="center">
              Faça seu login
            </Text>
            <Stack margin="x1">
              <Input name="email" icon={FiMail} placeholder="E-mail" />

              <Input
                name="password"
                icon={FiLock}
                type="password"
                placeholder="Senha"
              />
            </Stack>
            <Stack>
              <Button type="submit">Entrar</Button>

              <a href="forgot">Esqueci minha senha</a>
            </Stack>
          </Stack>
        </Form>

        {/* <a href="signup">
          <FiLogIn />
          Criar conta
        </a> */}
      </Content>
      <Background />
    </Container>
  );
};
