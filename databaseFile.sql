PGDMP                         {            feedback    15.2    15.2                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16490    feedback    DATABASE     {   CREATE DATABASE feedback WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_India.1252';
    DROP DATABASE feedback;
                postgres    false                        2615    16491    feedback_schema    SCHEMA        CREATE SCHEMA feedback_schema;
    DROP SCHEMA feedback_schema;
                postgres    false            �            1259    16492    feedback_table    TABLE     �  CREATE TABLE feedback_schema.feedback_table (
    enrollment text NOT NULL,
    t_name character(50) NOT NULL,
    t_subject text NOT NULL,
    question_1 integer NOT NULL,
    question_2 integer NOT NULL,
    question_3 integer NOT NULL,
    question_4 integer NOT NULL,
    question_5 integer NOT NULL,
    question_6 integer NOT NULL,
    question_7 integer NOT NULL,
    question_8 integer NOT NULL,
    question_9 integer NOT NULL,
    question_10 integer NOT NULL
);
 +   DROP TABLE feedback_schema.feedback_table;
       feedback_schema         heap    postgres    false    6            �            1259    16497    registration_table    TABLE       CREATE TABLE feedback_schema.registration_table (
    userid integer NOT NULL,
    enrollment text NOT NULL,
    student_name character(50) NOT NULL,
    s_course text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    s_sem text NOT NULL
);
 /   DROP TABLE feedback_schema.registration_table;
       feedback_schema         heap    postgres    false    6            �            1259    16502    registration_table_userid_seq    SEQUENCE     �   CREATE SEQUENCE feedback_schema.registration_table_userid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 =   DROP SEQUENCE feedback_schema.registration_table_userid_seq;
       feedback_schema          postgres    false    216    6                       0    0    registration_table_userid_seq    SEQUENCE OWNED BY     q   ALTER SEQUENCE feedback_schema.registration_table_userid_seq OWNED BY feedback_schema.registration_table.userid;
          feedback_schema          postgres    false    217            �            1259    16503    teacher_table    TABLE     �   CREATE TABLE feedback_schema.teacher_table (
    tid integer NOT NULL,
    t_name character(50) NOT NULL,
    t_subject text NOT NULL,
    t_course text NOT NULL,
    t_sem text NOT NULL
);
 *   DROP TABLE feedback_schema.teacher_table;
       feedback_schema         heap    postgres    false    6            �            1259    16508    teacher_table_tid_seq    SEQUENCE     �   CREATE SEQUENCE feedback_schema.teacher_table_tid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE feedback_schema.teacher_table_tid_seq;
       feedback_schema          postgres    false    218    6                       0    0    teacher_table_tid_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE feedback_schema.teacher_table_tid_seq OWNED BY feedback_schema.teacher_table.tid;
          feedback_schema          postgres    false    219            o           2604    16509    registration_table userid    DEFAULT     �   ALTER TABLE ONLY feedback_schema.registration_table ALTER COLUMN userid SET DEFAULT nextval('feedback_schema.registration_table_userid_seq'::regclass);
 Q   ALTER TABLE feedback_schema.registration_table ALTER COLUMN userid DROP DEFAULT;
       feedback_schema          postgres    false    217    216            p           2604    16510    teacher_table tid    DEFAULT     �   ALTER TABLE ONLY feedback_schema.teacher_table ALTER COLUMN tid SET DEFAULT nextval('feedback_schema.teacher_table_tid_seq'::regclass);
 I   ALTER TABLE feedback_schema.teacher_table ALTER COLUMN tid DROP DEFAULT;
       feedback_schema          postgres    false    219    218                      0    16492    feedback_table 
   TABLE DATA           �   COPY feedback_schema.feedback_table (enrollment, t_name, t_subject, question_1, question_2, question_3, question_4, question_5, question_6, question_7, question_8, question_9, question_10) FROM stdin;
    feedback_schema          postgres    false    215                    0    16497    registration_table 
   TABLE DATA           y   COPY feedback_schema.registration_table (userid, enrollment, student_name, s_course, email, password, s_sem) FROM stdin;
    feedback_schema          postgres    false    216   �       	          0    16503    teacher_table 
   TABLE DATA           Y   COPY feedback_schema.teacher_table (tid, t_name, t_subject, t_course, t_sem) FROM stdin;
    feedback_schema          postgres    false    218                      0    0    registration_table_userid_seq    SEQUENCE SET     U   SELECT pg_catalog.setval('feedback_schema.registration_table_userid_seq', 17, true);
          feedback_schema          postgres    false    217                       0    0    teacher_table_tid_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('feedback_schema.teacher_table_tid_seq', 9, true);
          feedback_schema          postgres    false    219            r           2606    16512 4   registration_table registration_table_enrollment_key 
   CONSTRAINT     ~   ALTER TABLE ONLY feedback_schema.registration_table
    ADD CONSTRAINT registration_table_enrollment_key UNIQUE (enrollment);
 g   ALTER TABLE ONLY feedback_schema.registration_table DROP CONSTRAINT registration_table_enrollment_key;
       feedback_schema            postgres    false    216            t           2606    16514 *   registration_table registration_table_pkey 
   CONSTRAINT     y   ALTER TABLE ONLY feedback_schema.registration_table
    ADD CONSTRAINT registration_table_pkey PRIMARY KEY (enrollment);
 ]   ALTER TABLE ONLY feedback_schema.registration_table DROP CONSTRAINT registration_table_pkey;
       feedback_schema            postgres    false    216            v           2606    16516     teacher_table teacher_table_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY feedback_schema.teacher_table
    ADD CONSTRAINT teacher_table_pkey PRIMARY KEY (tid);
 S   ALTER TABLE ONLY feedback_schema.teacher_table DROP CONSTRAINT teacher_table_pkey;
       feedback_schema            postgres    false    218            w           2606    16517 -   feedback_table feedback_table_enrollment_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY feedback_schema.feedback_table
    ADD CONSTRAINT feedback_table_enrollment_fkey FOREIGN KEY (enrollment) REFERENCES feedback_schema.registration_table(enrollment) NOT VALID;
 `   ALTER TABLE ONLY feedback_schema.feedback_table DROP CONSTRAINT feedback_table_enrollment_fkey;
       feedback_schema          postgres    false    3186    216    215               m   x�s�0�00060�t)�SH��N�R�JL/I,P 8S2�3KsRsRK���2�9�9M���r	6�041�0�XQ��Z���X���H�
O�N# 4�����\1z\\\ /�%E         e  x����N�0�ϛ��Dq~��R	8��H\�mD\7����=�Dr�������r�Լ�yZ&���GV��<#y����je+uPBǇ��s SM���f�G�Gd'� �a�+/[�B7��^��������qP-{7�E��G#�d�=#�bYB����q�7c yMdee����9w͘�����X�3@�M�ӧ�B���B�[d��7�r�{��u+��� 
KO}�e� �ʾŎ��OxE}ׇ���q3�<<�~���C�ƙP?'�Yx���a��ˤ,������Z��i}�ɇ�M���/~6�������=!	g��䖾p�,)`'�/�[���^N�;���GQ�W���      	     x��ҽn�0���\�ۅ*Mҟф�IkQ�$S�Sz�`�1m���N�lA*����&�M���I�^54����h��,B^Qg&&6�-j�e���U �4�a��Y~�#$��-2�">C�ڗ� ��<��d�*]��K����C9��K�/l�A_Қ�����%ngО�py����Wg���������",\��u����߾��%Ko�%B2�p���*)Q����jBݸ��|{'�.������5찴���˧*��:�5�VE����1���P���     