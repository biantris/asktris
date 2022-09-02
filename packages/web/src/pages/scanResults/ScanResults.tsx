/* eslint-disable no-console */
import React, { SyntheticEvent, useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { Grid, Label, Message, Table, Header } from 'semantic-ui-react';

import { getAllResults } from '../../../service/result/result';

import { NavigationMenu } from '../../components/index';

import { formatDateAndTime } from '../../utils/formatDate';

import { Container, ContentContainer, LabelContent, HeaderContent } from './styles';

const colors: any = {
  Queued: 'grey',
  'In Progress': 'orange',
  Success: 'green',
  Failure: 'red',
};

const ScanResults = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [activeItem, setActiveItem] = useState<string>('results');
  const [errors, setErrors] = useState<string>();

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

  const fetchAllResults = async () => {
    try {
      const {
        data: { results },
      } = await getAllResults();
      setResults(results);
    } catch (error: any) {
      console.error(error);
      setErrors(error.response ? error.response.data?.message : 'Internal Server Error');
    }
  };

  useEffect(() => {
    fetchAllResults();
  }, []);

  return (
    <Container>
      <NavigationMenu activeItem={activeItem} handleItemClick={handleItemClick} />
      <ContentContainer>
        {errors ? (
          <div data-testid='message'>
            <Message negative size='tiny'>
              <Message.Header>{errors}</Message.Header>
            </Message>
          </div>
        ) : !!results.length ? (
          <Grid>
            <Table size='small' data-testid='table'>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Repository Name</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                  <Table.HeaderCell>No. of Findings</Table.HeaderCell>
                  <Table.HeaderCell>Timestamp</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {results.map((result: any) => (
                  <Table.Row key={result._id}>
                    <Table.Cell>{result.repositoryName}</Table.Cell>
                    <Table.Cell>
                      <Label color={colors[result.status]} size='tiny' basic>
                        {result.status}
                      </Label>
                    </Table.Cell>
                    <Table.Cell>
                      <Link to={`/results/${result._id}`}>
                        <LabelContent>
                          <span style={{ textDecoration: 'underline' }}>View Detail</span>
                          <Label circular color='teal' size='tiny'>
                            {result.findings.length}
                          </Label>
                        </LabelContent>
                      </Link>
                    </Table.Cell>
                    <Table.Cell>
                      {result.status === 'Queued'
                        ? formatDateAndTime(result.queuedAt)
                        : result.status === 'In Progress'
                        ? formatDateAndTime(result.scannedAt)
                        : formatDateAndTime(result.finishedAt)}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Grid>
        ) : (
          <HeaderContent>
            <Header as='h1' color='teal'>
              No Scanning Results
            </Header>
          </HeaderContent>
        )}
      </ContentContainer>
    </Container>
  );
};

export default ScanResults;
