/* eslint-disable no-console */
import React, { SyntheticEvent, useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { Header, List, Table } from 'semantic-ui-react';

import { getResult } from '../../../service/result/result';

import { NavigationMenu } from '../../components/index';

import { formatDateAndTime } from '../../utils/formatDate';

import { Container, Content, ContentContainer, Title } from './styles';

const DetailScanResult = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [result, setResult] = useState<React.SetStateAction<any>>();
  const [activeItem, setActiveItem] = useState<string>('');

  const handleItemClick = (e: SyntheticEvent, data: any) => {
    setActiveItem(data.name);
    if (data.name === 'home') {
      navigate('/');
    } else if (data.name === 'add new scan') {
      navigate('/new');
    } else {
      navigate(`/${data.name}`);
    }
  };

  const fetchResult = async () => {
    try {
      const {
        data: { success, data },
      } = await getResult(id);
      if (success) {
        console.log({ data });
        setResult(data);
        setActiveItem(data.repositoryName);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchResult();
  }, []);

  if (!result) return <div>loading...</div>;

  return (
    <Container>
      <NavigationMenu activeItem={activeItem} handleItemClick={handleItemClick} />
      <ContentContainer>
        <Content>
          <Title>
            <Header as='h2' color='teal'>
              {result.repositoryName}
            </Header>
            <List>
              <List.Item icon='recycle' content={result.status} />
              <List.Item icon='bug' content={result.findings.length} />
              <List.Item
                icon='time'
                content={
                  result.status === 'Queued'
                    ? formatDateAndTime(result.queuedAt)
                    : result.status === 'In Progress'
                    ? formatDateAndTime(result.scannedAt)
                    : formatDateAndTime(result.finishedAt)
                }
              />
            </List>
          </Title>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Type</Table.HeaderCell>
                <Table.HeaderCell>Rule ID</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
                <Table.HeaderCell>Severity</Table.HeaderCell>
                <Table.HeaderCell>Location</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {result.findings.map((finding: any) => (
                <Table.Row key={finding._id}>
                  <Table.Cell>{finding.type}</Table.Cell>
                  <Table.Cell>{finding.ruleId}</Table.Cell>
                  <Table.Cell>{finding.metadata.description}</Table.Cell>
                  <Table.Cell>{finding.metadata.severity}</Table.Cell>
                  <Table.Cell>
                    {finding.location.path} : line {finding.location.positions.begin.line}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default DetailScanResult;
